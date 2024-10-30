import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ScrollView, StackLayout, Label, GridLayout, TextField, Button } from "@nativescript/core";

type ContributionScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Contribution">;
  route: { 
    params: { 
      provider: string;
      productType: string;
      minAmount: number;
      maxAmount: number;
    } 
  };
};

export function ContributionScreen({ navigation, route }: ContributionScreenProps) {
  const { provider, productType, minAmount, maxAmount } = route.params;
  const [amount, setAmount] = React.useState("");
  const [isPercentage, setIsPercentage] = React.useState(false);
  const [frequency, setFrequency] = React.useState("monthly");
  const [startDate, setStartDate] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState("");

  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setValidationMessage("Please enter a valid number");
      return false;
    }
    if (numValue < minAmount) {
      setValidationMessage(`Minimum contribution is KES ${minAmount}`);
      return false;
    }
    if (numValue > maxAmount) {
      setValidationMessage(`Maximum contribution is KES ${maxAmount}`);
      return false;
    }
    setValidationMessage("");
    return true;
  };

  const handleConfirm = () => {
    if (validateAmount(amount)) {
      // Here you would typically make an API call to save the contribution
      navigation.navigate("ContributionSuccess", {
        amount,
        frequency,
        startDate,
        provider,
        productType
      });
    }
  };

  return (
    <gridLayout rows="auto, *, auto">
      <gridLayout row={0} columns="auto, *" style={styles.header}>
        <button col={0} text="←" onTap={() => navigation.goBack()} style={styles.backButton} />
        <label col={1} text="Set Up Contribution" style={styles.headerText} />
      </gridLayout>

      <scrollView row={1}>
        <stackLayout style={styles.container}>
          <gridLayout style={styles.card} rows="auto, auto" columns="*">
            <label row={0} style={styles.providerName} text={provider} />
            <label row={1} style={styles.productType} text={productType} />
          </gridLayout>

          {/* Amount Input */}
          <gridLayout style={styles.card} rows="auto, auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Contribution Amount" />
            <gridLayout row={1} columns="*, auto" style={styles.inputContainer}>
              <textField 
                col={0}
                style={styles.input} 
                keyboardType="number" 
                hint="Enter amount" 
                text={amount}
                onTextChange={(args) => {
                  const newAmount = args.object.text;
                  setAmount(newAmount);
                  validateAmount(newAmount);
                }}
              />
              <button 
                col={1} 
                style={[styles.typeToggle, isPercentage && styles.activeToggle]} 
                text={isPercentage ? "%" : "KES"}
                onTap={() => setIsPercentage(!isPercentage)} 
              />
            </gridLayout>
            {validationMessage ? 
              <label row={2} style={styles.validationMessage} text={validationMessage} /> 
              : null}
          </gridLayout>

          {/* Frequency Selection */}
          <gridLayout style={styles.card} rows="auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Frequency" />
            <gridLayout row={1} columns="*, *" style={styles.frequencyContainer}>
              <button 
                col={0} 
                style={[styles.frequencyButton, frequency === "monthly" && styles.activeFrequency]} 
                text="Monthly"
                onTap={() => setFrequency("monthly")} 
              />
              <button 
                col={1} 
                style={[styles.frequencyButton, frequency === "quarterly" && styles.activeFrequency]} 
                text="Quarterly"
                onTap={() => setFrequency("quarterly")} 
              />
            </gridLayout>
          </gridLayout>

          {/* Start Date */}
          <gridLayout style={styles.card} rows="auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Start Date" />
            <textField 
              row={1}
              style={styles.input} 
              hint="DD/MM/YYYY" 
              text={startDate}
              onTextChange={(args) => setStartDate(args.object.text)}
            />
          </gridLayout>

          {/* Summary */}
          <gridLayout style={styles.card} rows="auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Summary" />
            <stackLayout row={1}>
              <label style={styles.summaryText} text={`Amount: ${isPercentage ? amount + '%' : 'KES ' + amount}`} />
              <label style={styles.summaryText} text={`Frequency: ${frequency}`} />
              <label style={styles.summaryText} text={`Start Date: ${startDate || 'Not set'}`} />
            </stackLayout>
          </gridLayout>
        </stackLayout>
      </scrollView>

      <button row={2} style={styles.confirmButton} text="Confirm" onTap={handleConfirm} />
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    fontSize: 24,
    color: "#4A90E2",
    backgroundColor: "transparent",
    width: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
  },
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  providerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
  },
  productType: {
    fontSize: 14,
    color: "#757575",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
  },
  typeToggle: {
    width: 50,
    fontSize: 14,
    backgroundColor: "#E0E0E0",
    color: "#757575",
    borderRadius: 5,
    marginLeft: 8,
  },
  activeToggle: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF",
  },
  frequencyContainer: {
    marginBottom: 8,
  },
  frequencyButton: {
    fontSize: 14,
    backgroundColor: "#E0E0E0",
    color: "#757575",
    borderRadius: 5,
    margin: 4,
  },
  activeFrequency: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF",
  },
  validationMessage: {
    fontSize: 12,
    color: "#EF5350",
    marginTop: 4,
  },
  summaryText: {
    fontSize: 14,
    color: "#212121",
    marginBottom: 4,
  },
  confirmButton: {
    backgroundColor: "#FF7043",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    margin: 16,
    borderRadius: 5,
  },
});
