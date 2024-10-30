import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ScrollView, StackLayout, Label, GridLayout, TextField, Button } from "@nativescript/core";

type WithdrawScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Withdraw">;
};

export function WithdrawScreen({ navigation }: WithdrawScreenProps) {
  const [amount, setAmount] = React.useState("");
  const [destinationType, setDestinationType] = React.useState<"mobile" | "bank">("mobile");
  const [accountNumber, setAccountNumber] = React.useState("");
  const [bankName, setBankName] = React.useState("");
  const [accountName, setAccountName] = React.useState("");
  const [branchCode, setBranchCode] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState("");

  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setValidationMessage("Please enter a valid amount");
      return false;
    }
    if (numValue < 100) {
      setValidationMessage("Minimum withdrawal amount is KES 100");
      return false;
    }
    if (numValue > 300000) {
      setValidationMessage("Maximum withdrawal amount is KES 300,000");
      return false;
    }
    setValidationMessage("");
    return true;
  };

  const validateBankDetails = () => {
    if (destinationType === "bank") {
      if (!bankName) {
        setValidationMessage("Please enter bank name");
        return false;
      }
      if (!accountName) {
        setValidationMessage("Please enter account name");
        return false;
      }
      if (!accountNumber || accountNumber.length < 10) {
        setValidationMessage("Please enter a valid account number");
        return false;
      }
      if (!branchCode) {
        setValidationMessage("Please enter branch code");
        return false;
      }
    } else {
      if (!accountNumber || accountNumber.length !== 10) {
        setValidationMessage("Please enter a valid mobile number");
        return false;
      }
    }
    return true;
  };

  const handleConfirm = () => {
    if (!validateAmount(amount)) return;
    if (!validateBankDetails()) return;

    navigation.navigate("WithdrawSuccess", {
      amount: `KES ${amount}`,
      destination: destinationType === "mobile" ? "Mobile Money" : "Bank Account",
      accountNumber: destinationType === "mobile" ? 
        accountNumber : 
        `${bankName} - ${accountNumber}`,
      reference: `WD${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      estimatedTime: destinationType === "mobile" ? "Instant" : "1-2 Business Days",
      ...(destinationType === "bank" && {
        bankName,
        accountName,
        branchCode,
      })
    });
  };

  return (
    <gridLayout rows="auto, *, auto">
      <gridLayout row={0} columns="auto, *" style={styles.header}>
        <button col={0} text="←" onTap={() => navigation.goBack()} style={styles.backButton} />
        <label col={1} text="Withdraw Funds" style={styles.headerText} />
      </gridLayout>

      <scrollView row={1}>
        <stackLayout style={styles.container}>
          {/* Amount Input */}
          <gridLayout style={styles.card} rows="auto, auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Amount to Withdraw" />
            <textField 
              row={1}
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
            {validationMessage ? 
              <label row={2} style={styles.validationMessage} text={validationMessage} /> 
              : null}
          </gridLayout>

          {/* Destination Type Selection */}
          <gridLayout style={styles.card} rows="auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Withdraw To" />
            <gridLayout row={1} columns="*, *" style={styles.destinationContainer}>
              <button 
                col={0} 
                style={[styles.destinationButton, destinationType === "mobile" && styles.activeDestination]} 
                text="Mobile Money" 
                onTap={() => setDestinationType("mobile")} 
              />
              <button 
                col={1} 
                style={[styles.destinationButton, destinationType === "bank" && styles.activeDestination]} 
                text="Bank Account" 
                onTap={() => setDestinationType("bank")} 
              />
            </gridLayout>
          </gridLayout>

          {/* Account Details Input */}
          {destinationType === "mobile" ? (
            <gridLayout style={styles.card} rows="auto, auto" columns="*">
              <label row={0} style={styles.sectionTitle} text="Mobile Number" />
              <textField 
                row={1}
                style={styles.input} 
                hint="Enter mobile number"
                keyboardType="phone"
                text={accountNumber}
                onTextChange={(args) => setAccountNumber(args.object.text)}
              />
            </gridLayout>
          ) : (
            <gridLayout style={styles.card} rows="auto, auto, auto, auto, auto" columns="*">
              <label row={0} style={styles.sectionTitle} text="Bank Details" />
              
              <textField 
                row={1}
                style={styles.input} 
                hint="Bank Name"
                text={bankName}
                onTextChange={(args) => setBankName(args.object.text)}
              />
              
              <textField 
                row={2}
                style={styles.input} 
                hint="Account Name"
                text={accountName}
                onTextChange={(args) => setAccountName(args.object.text)}
              />
              
              <textField 
                row={3}
                style={styles.input} 
                hint="Account Number"
                keyboardType="number"
                text={accountNumber}
                onTextChange={(args) => setAccountNumber(args.object.text)}
              />
              
              <textField 
                row={4}
                style={styles.input} 
                hint="Branch Code"
                text={branchCode}
                onTextChange={(args) => setBranchCode(args.object.text)}
              />
            </gridLayout>
          )}

          {validationMessage ? 
            <label style={styles.validationMessage} text={validationMessage} /> 
            : null}

          {/* Summary */}
          <gridLayout style={styles.card} rows="auto, auto" columns="*">
            <label row={0} style={styles.sectionTitle} text="Summary" />
            <stackLayout row={1}>
              <label style={styles.summaryText} text={`Amount: KES ${amount || '0'}`} />
              <label style={styles.summaryText} text={`Destination: ${destinationType === "mobile" ? "Mobile Money" : "Bank Account"}`} />
              {destinationType === "mobile" ? (
                <label style={styles.summaryText} text={`Mobile Number: ${accountNumber || 'Not set'}`} />
              ) : (
                <>
                  <label style={styles.summaryText} text={`Bank: ${bankName || 'Not set'}`} />
                  <label style={styles.summaryText} text={`Account Name: ${accountName || 'Not set'}`} />
                  <label style={styles.summaryText} text={`Account Number: ${accountNumber || 'Not set'}`} />
                  <label style={styles.summaryText} text={`Branch Code: ${branchCode || 'Not set'}`} />
                </>
              )}
            </stackLayout>
          </gridLayout>
        </stackLayout>
      </scrollView>

      <button row={2} style={styles.confirmButton} text="Confirm Withdrawal" onTap={handleConfirm} />
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: "#212121",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10, // Added margin for bank details inputs
  },
  destinationContainer: {
    marginBottom: 8,
  },
  destinationButton: {
    fontSize: 14,
    backgroundColor: "#E0E0E0",
    color: "#757575",
    borderRadius: 5,
    margin: 4,
    padding: 10,
  },
  activeDestination: {
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
