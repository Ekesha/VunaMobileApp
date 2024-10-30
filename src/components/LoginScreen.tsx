import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { TextField, Button, StackLayout, Label, FlexboxLayout, ScrollView } from "@nativescript/core";
import { API_CONFIG, APP_AUTH, TENANT_ID } from "../config";

type LoginScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Login">,
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [appAuthStatus, setAppAuthStatus] = useState("Checking app authorization...");
  const [appAuthToken, setAppAuthToken] = useState("");

  useEffect(() => {
    checkAppAuthorization();
  }, []);

  const checkAppAuthorization = async () => {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.AUTHENTICATION_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${APP_AUTH.USERNAME}:${APP_AUTH.PASSWORD}`)}`,
          'fineract-platform-tenantid': TENANT_ID
        },
        body: JSON.stringify({
          username: APP_AUTH.USERNAME,
          password: APP_AUTH.PASSWORD
        })
      });

      const data = await response.json();
      if (data.authenticated) {
        setAppAuthStatus("App authorized successfully");
        console.log("App authorized. Token:", data.base64EncodedAuthenticationKey);
        setAppAuthToken(data.base64EncodedAuthenticationKey);
        global.base64EncodedAuthenticationKey = data.base64EncodedAuthenticationKey; // Set global token
      } else {
        setAppAuthStatus("App authorization failed. Please try again.");
      }
    } catch (error) {
      console.error("App authorization error:", error);
      setAppAuthStatus("Network error. Please check your connection and try again.");
    }
  };

  const handleLogin = async () => {
    console.log("Starting login process...");

    if (!username || !password) {
      console.log("Login failed: Username and password are required");
      setLoginStatus("Username and password are required");
      return;
    }

    setIsLoading(true);
    setLoginStatus("Logging in...");
    console.log("Initiating login...");

    try {
      const userAuthHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("User Authentication Token:", userAuthHeader);
      console.log("App Authentication Token:", appAuthToken);

      const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.SELF_CLIENTS_ENDPOINT}`, {
        method: 'GET',
        headers: {
          'Authorization': userAuthHeader,
          'fineract-platform-tenantid': TENANT_ID,
          'accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log("Login response:", JSON.stringify(data, null, 2));

      if (data.pageItems && data.pageItems.length > 0) {
        console.log("Login successful. Navigating to Dashboard...");
        const userDataWithCredentials = {
          ...data.pageItems[0],
          username,
          password
        };
        console.log("User data being passed:", JSON.stringify(userDataWithCredentials, null, 2));
        navigation.navigate("Dashboard", { 
          userData: userDataWithCredentials, 
          username, 
          password,
          appAuthToken: global.base64EncodedAuthenticationKey
        });
        setLoginStatus("Login successful!");
      } else {
        console.log("Login failed: No user data found");
        setLoginStatus("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login process error:", error);
      setLoginStatus("Login failed: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
      console.log("Login process completed.");
    }
  };

  return (
    <scrollView>
      <flexboxLayout style={styles.container}>
        <stackLayout style={styles.content}>
          <label className="text-3xl mb-8 font-bold text-center text-white" text="Login" />
          <label text={appAuthStatus} style={styles.appAuthStatus} />
          <textField
            style={styles.input}
            hint="Username"
            text={username}
            onTextChange={(args) => setUsername(args.object.text)}
          />
          <textField
            style={styles.input}
            hint="Password"
            text={password}
            secure={true}
            onTextChange={(args) => setPassword(args.object.text)}
          />
          <button
            style={styles.button}
            text={isLoading ? "Logging in..." : "Login"}
            onTap={handleLogin}
            isEnabled={!isLoading}
          />
          <button
            style={styles.signupButton}
            text="Sign Up"
            onTap={() => navigation.navigate("Signup")}
            isEnabled={!isLoading}
          />
          <label
            style={[
              styles.statusLabel,
              { color: loginStatus.includes("successful") ? "#50E3C2" : "#FF7043" }
            ]}
            text={loginStatus}
          />
        </stackLayout>
      </flexboxLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#4A90E2"
  },
  content: {
    width: "80%",
    alignSelf: "center"
  },
  input: {
    fontSize: 18,
    color: "#212121",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10
  },
  button: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#29B6F6",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  signupButton: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#50E3C2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  },
  statusLabel: {
    fontSize: 16,
    textAlignment: "center"
  },
  appAuthStatus: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlignment: "center",
    marginBottom: 20,
  },
});
