import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { StackLayout, Label, Button } from "@nativescript/core";

type ContributionSuccessScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "ContributionSuccess">;
  route: { 
    params: { 
      amount: string;
      frequency: string;
      startDate: string;
      provider: string;
      productType: string;
    } 
  };
};

export function ContributionSuccessScreen({ navigation, route }: ContributionSuccessScreenProps) {
  const { amount, frequency, startDate, provider, productType } = route.params;

  return (
    <stackLayout style={styles.container}>
      <label style={styles.successIcon} text="✓" />
      <label style={styles.title} text="Contribution Set Up Successfully!" />
      <label style={styles.message} text="Your investment contribution has been configured." />
      
      <stackLayout style={styles.summaryCard}>
        <label style={styles.summaryTitle} text="Contribution Details" />
        <label style={styles.summaryText} text={`Provider: ${provider}`} />
        <label style={styles.summaryText} text={`Product: ${productType}`} />
        <label style={styles.summaryText} text={`Amount: KES ${amount}`} />
        <label style={styles.summaryText} text={`Frequency: ${frequency}`} />
        <label style={styles.summaryText} text={`Start Date: ${startDate}`} />
      </stackLayout>

      <button 
        style={styles.button} 
        text="Return to Dashboard" 
        onTap={() => navigation.navigate("Dashboard")} 
      />
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  successIcon: {
    fontSize: 72,
    color: "#66BB6A",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 10,
    textAlignment: "center",
  },
  message: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 30,
    textAlignment: "center",
  },
  summaryCard: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 15,
  },
  summaryText: {
    fontSize: 16,
    color: "#212121",
    marginBottom: 8,
  },
  button: {
    fontSize: 16,
    color: "#FFFFFF",
    backgroundColor: "#FF7043",
    borderRadius: 5,
    padding: 15,
    width: "100%",
  },
});
