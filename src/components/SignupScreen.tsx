import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { TextField, Button, StackLayout, Label, FlexboxLayout, ScrollView } from "@nativescript/core";
import { API_CONFIG } from "../config";

type SignupScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Signup">,
};

export function SignupScreen({ navigation }: SignupScreenProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [employerId, setEmployerId] = useState(""); // New state for employer ID
  const [signupStatus, setSignupStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSignup = async () => {
    console.log("Starting signup process...");
    
    if (password !== repeatPassword) {
      console.log("Signup failed: Passwords do not match");
      setSignupStatus("Passwords do not match");
      return;
    }

    if (!employerId) {
      console.log("Signup failed: Employer ID is required");
      setSignupStatus("Employer ID is required");
      return;
    }

    if (!global.base64EncodedAuthenticationKey) {
      console.log("App authentication token is not available. Please ensure the app is properly authenticated.");
      setSignupStatus("App authentication failed. Please try again.");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setSignupStatus("Creating account...");
    console.log("Initiating account creation...");

    try {
      const today = new Date();
      const formattedDate = formatDate(today);
      console.log(`Formatted date for API calls: ${formattedDate}`);

      // First API call to create a client
      const clientRequestBody = {
        firstname,
        lastname,
        emailAddress: email,
        mobileNo,
        dateFormat: "dd MMMM yyyy",
        locale: "en",
        active: true,
        activationDate: formattedDate,
        officeId: parseInt(employerId, 10),
        legalFormId: 1
      };
      console.log("Client creation request body:", JSON.stringify(clientRequestBody, null, 2));

      console.log("Sending client creation request...");
      console.log("Using App Authentication Token:", global.base64EncodedAuthenticationKey);
      const clientResponse = await fetch(`${API_CONFIG.BASE_URL}/fineract-provider/api/v1/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
          'fineract-platform-tenantid': 'default'
        },
        body: JSON.stringify(clientRequestBody)
      });

      const clientData = await clientResponse.json();
      console.log("Client creation response:", JSON.stringify(clientData, null, 2));

      if (clientData.clientId) {
        console.log(`Client created successfully. Client ID: ${clientData.clientId}`);

        // Second API call to create a user
        const userRequestBody = {
          username,
          firstname,
          lastname,
          email,
          officeId: parseInt(employerId, 10),
          passwordNeverExpires: true,
          password,
          repeatPassword,
          isSelfServiceUser: true,
          clients: [clientData.clientId],
          roles: [1, 2],
          sendPasswordToEmail: false,
          staffId: 1
        };
        console.log("User creation request body:", JSON.stringify(userRequestBody, null, 2));

        console.log("Sending user creation request...");
        const userResponse = await fetch(`${API_CONFIG.BASE_URL}/fineract-provider/api/v1/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
            'fineract-platform-tenantid': 'default'
          },
          body: JSON.stringify(userRequestBody)
        });

        const userData = await userResponse.json();
        console.log("User creation response:", JSON.stringify(userData, null, 2));

        if (userData.resourceId) {
          console.log(`User created successfully. User ID: ${userData.resourceId}`);

          // Third API call to create a savings account
          const savingsAccountRequestBody = {
            clientId: clientData.clientId,
            dateFormat: "dd MMMM yyyy",
            externalId: `${clientData.clientId}-${Date.now()}`,
            locale: "en",
            productId: 1,
            submittedOnDate: formatDate(new Date())
          };
          console.log("Savings account creation request body:", JSON.stringify(savingsAccountRequestBody, null, 2));

          console.log("Sending savings account creation request...");
          const savingsAccountResponse = await fetch(`${API_CONFIG.BASE_URL}/fineract-provider/api/v1/savingsaccounts`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
              'fineract-platform-tenantid': 'default'
            },
            body: JSON.stringify(savingsAccountRequestBody)
          });

          const savingsAccountData = await savingsAccountResponse.json();
          console.log("Savings account creation response:", JSON.stringify(savingsAccountData, null, 2));

          if (savingsAccountData.savingsId) {
            console.log(`Savings account created successfully. Savings Account ID: ${savingsAccountData.savingsId}`);

            // Approve the savings account
            const approveRequestBody = {
              locale: "en",
              dateFormat: "dd MMMM yyyy",
              approvedOnDate: formattedDate
            };
            console.log("Approving savings account...");
            const approveResponse = await fetch(`${API_CONFIG.BASE_URL}/fineract-provider/api/v1/savingsaccounts/${savingsAccountData.savingsId}?command=approve`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
                'fineract-platform-tenantid': 'default'
              },
              body: JSON.stringify(approveRequestBody)
            });

            const approveData = await approveResponse.json();
            console.log("Savings account approval response:", JSON.stringify(approveData, null, 2));

            if (approveData.changes && approveData.changes.status.approved) {
              console.log("Savings account approved successfully.");

              // Activate the savings account
              const activateRequestBody = {
                locale: "en",
                dateFormat: "dd MMMM yyyy",
                activatedOnDate: formattedDate
              };
              console.log("Activating savings account...");
              const activateResponse = await fetch(`${API_CONFIG.BASE_URL}/fineract-provider/api/v1/savingsaccounts/${savingsAccountData.savingsId}?command=activate`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Basic ${global.base64EncodedAuthenticationKey}`,
                  'fineract-platform-tenantid': 'default'
                },
                body: JSON.stringify(activateRequestBody)
              });

              const activateData = await activateResponse.json();
              console.log("Savings account activation response:", JSON.stringify(activateData, null, 2));

              if (activateData.changes && activateData.changes.status.active) {
                console.log("Savings account activated successfully.");
                setSignupStatus("Signup successful");
                console.log("Navigating to SignupSuccess screen...");
                navigation.navigate("SignupSuccess", { 
                  clientId: clientData.clientId,
                  username,
                  password,
                  savingsAccountId: savingsAccountData.savingsId,
                  accountActive: true
                });
              } else {
                console.log("Savings account activation failed.");
                setSignupStatus("Savings account activation failed.");
              }
            } else {
              console.log("Savings account approval failed.");
              setSignupStatus("Savings account approval failed.");
            }
          } else {
            console.log("Savings account creation failed:", savingsAccountData.errors ? savingsAccountData.errors[0].defaultUserMessage : "Unknown error");
            setSignupStatus("Savings account creation failed: " + (savingsAccountData.errors ? savingsAccountData.errors[0].defaultUserMessage : "Unknown error"));
          }
        } else {
          console.log("User creation failed:", userData.errors ? userData.errors[0].defaultUserMessage : "Unknown error");
          setSignupStatus("User creation failed: " + (userData.errors ? userData.errors[0].defaultUserMessage : "Unknown error"));
        }
      } else {
        console.log("Client creation failed:", clientData.errors ? clientData.errors[0].defaultUserMessage : "Unknown error");
        setSignupStatus("Client creation failed: " + (clientData.errors ? clientData.errors[0].defaultUserMessage : "Unknown error"));
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.error("Signup process error:", error);
      setSignupStatus("Signup failed: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
      console.log("Signup process completed.");
    }
  };

  return (
    <scrollView>
      <flexboxLayout style={styles.container}>
        <stackLayout style={styles.content}>
          <label className="text-3xl mb-8 font-bold text-center text-white" text="Sign Up" />
          <textField
            style={styles.input}
            hint="First Name"
            text={firstname}
            onTextChange={(args) => setFirstname(args.object.text)}
          />
          <textField
            style={styles.input}
            hint="Last Name"
            text={lastname}
            onTextChange={(args) => setLastname(args.object.text)}
          />
          <textField
            style={styles.input}
            hint="Email"
            text={email}
            keyboardType="email"
            onTextChange={(args) => setEmail(args.object.text)}
          />
          <textField
            style={styles.input}
            hint="Mobile Number"
            text={mobileNo}
            keyboardType="phone"
            onTextChange={(args) => setMobileNo(args.object.text)}
          />
          <textField
            style={styles.input}
            hint="Employer ID"
            text={employerId}
            keyboardType="number"
            onTextChange={(args) => setEmployerId(args.object.text)}
          />
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
          <textField
            style={styles.input}
            hint="Repeat Password"
            text={repeatPassword}
            secure={true}
            onTextChange={(args) => setRepeatPassword(args.object.text)}
          />
          <button
            style={styles.button}
            text={isLoading ? "Creating Account..." : "Sign Up"}
            onTap={handleSignup}
            isEnabled={!isLoading}
          />
          <button
            style={styles.backButton}
            text="Back to Login"
            onTap={() => navigation.navigate("Login")}
            isEnabled={!isLoading}
          />
          <label
            style={[
              styles.statusLabel,
              { color: signupStatus.includes("successful") ? "#50E3C2" : "#FF7043" }
            ]}
            text={signupStatus}
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
  backButton: {
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
  }
});
