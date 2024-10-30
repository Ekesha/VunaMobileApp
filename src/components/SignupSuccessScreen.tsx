import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { StackLayout, Label, Button } from "@nativescript-core";

type SignupSuccessScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "SignupSuccess">,
  route: { params: { clientId: number, username: string, password: string, savingsAccountId: number, accountActive: boolean } }
};

export function SignupSuccessScreen({ navigation, route }: SignupSuccessScreenProps) {
  const { clientId, username, password, savingsAccountId, accountActive } = route.params;

  return (
    <stackLayout style={styles.container}>
      <label className="text-3xl mb-8 font-bold text-center text-white" text="Signup Successful" />
      <label style={styles.infoLabel} text={`Client ID: ${clientId}`} />
      <label style={styles.infoLabel} text={`Username: ${username}`} />
      <label style={styles.infoLabel} text={`Password: ${password}`} />
      <label style={styles.infoLabel} text={`Savings Account ID: ${savingsAccountId}`} />
      <label style={styles.infoLabel} text={`Account Active: ${accountActive ? "Yes" : "No"}`} />
      <button
        style={styles.button}
        text="Go to Login"
        onTap={() => navigation.navigate("Login")}
      />
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4A90E2",
  },
  infoLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 15,
  },
  button: {
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#29B6F6",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
});
