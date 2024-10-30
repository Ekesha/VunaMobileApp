import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ScrollView, StackLayout, Label, GridLayout, ActivityIndicator } from "@nativescript/core";
import { NavigationBar } from "./NavigationBar";
import { API_CONFIG, TENANT_ID } from "../config";

type PortfolioScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Portfolio">,
  route: { 
    params?: { 
      userData?: any, 
      username?: string, 
      password?: string,
      appAuthToken?: string  // Add appAuthToken to route params
    } 
  }
};

type SavingsAccount = {
  id: number;
  productName: string;
  accountBalance: number;
  currency: {
    displaySymbol: string;
  };
  accountNo?: string;
  status?: { value: string };
  lastActiveTransactionDate?: string[];
};

type Transaction = {
  id: number;
  date: string;
  amount: number;
  type: string;
  description: string;
  runningBalance: number;
};

export function PortfolioScreen({ navigation, route }: PortfolioScreenProps) {
  console.log("PortfolioScreen rendered. Route params:", JSON.stringify(route.params, null, 2));
  
  const { userData, username, password, appAuthToken } = route.params || {};
  console.log("Extracted data:", { 
    userDataExists: !!userData, 
    userDataId: userData?.id,
    usernameExists: !!username, 
    passwordExists: !!password,
    appAuthTokenExists: !!appAuthToken // Log appAuthToken presence
  });
  const [accounts, setAccounts] = useState<SavingsAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    console.log("PortfolioScreen useEffect triggered");
    if (userData?.id && username && password) {
      console.log("userData is valid, fetching accounts");
      fetchAccounts();
    } else {
      console.error("Invalid userData or missing credentials:", { userData, username, password });
      setError("User data or credentials are missing or invalid. Please log in again.");
      setLoading(false);
    }
  }, [userData, username, password]);

  const fetchAccounts = async () => {
    try {
      console.log("Fetching accounts...");
      console.log("User ID:", userData.id);
      console.log("Username:", username);
      console.log("Password:", password ? "********" : "Not provided");

      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("Auth header:", authHeader);

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.SELF_CLIENTS_ENDPOINT}/${userData.id}/accounts`;
      console.log("Fetching from URL:", url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': TENANT_ID,
          'accept': 'application/json'
        }
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", JSON.stringify(response.headers, null, 2));

      const data = await response.json();
      console.log("Response data:", JSON.stringify(data, null, 2));

      if (data.savingsAccounts && Array.isArray(data.savingsAccounts)) {
        console.log("Savings accounts found:", data.savingsAccounts.length);
        setAccounts(data.savingsAccounts);
      } else {
        console.error("Unexpected data structure:", data);
        throw new Error("Unexpected data structure");
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching accounts:", err);
      setError(`Failed to load portfolio data. Error: ${err.message}`);
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number | undefined, symbol: string) => {
    if (amount === undefined || isNaN(amount)) {
      return `${symbol} 0.00`;
    }
    return `${symbol} ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const calculateTotalInvestment = () => {
    return accounts.reduce((total, account) => total + (account.accountBalance || 0), 0);
  };

  const handleProductSelect = (account: any) => {
    console.log('\n========== PRODUCT SELECTION ==========');
    console.log('Selected account:', account);
    console.log('Account ID:', account.id);
    console.log('App Auth Token:', appAuthToken); // Log the token
    
    if (!appAuthToken) {
      console.error('App auth token is missing when selecting product');
      return;
    }

    setSelectedProductId(account.id);
    fetchTransactions(account.id);
  };

  const formatBalance = (balance: number | undefined): string => {
    if (balance === undefined || balance === null || isNaN(balance)) {
      return "KSh 0.00";
    }
    return `KSh ${balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const renderProductDetailView = (account: any) => {
    if (!account) {
      console.error('No account found for selected ID');
      return null;
    }

    return (
      <>
        {/* Back Button */}
        <gridLayout style={styles.backButtonContainer} rows="auto" columns="auto, *">
          <button col={0} style={styles.backButton} text="← Back" 
            onTap={() => setSelectedProductId(null)} />
          <label col={1} style={styles.productDetailTitle} text="Product Details" />
        </gridLayout>

        {/* Balance Card */}
        <gridLayout style={styles.savingsCard} rows="auto, auto, auto" columns="*">
          <label row={0} style={styles.sectionTitle} text={account.productName || 'N/A'} />
          <label row={1} style={styles.accountNumber} text={`Account: ${account.accountNo || 'N/A'}`} />
          <label row={2} style={styles.accountBalance} 
            text={`Balance: ${formatBalance(account.accountBalance)}`} />
        </gridLayout>

        {/* Transactions Card */}
        <gridLayout style={styles.transactionsCard} rows="auto, auto" columns="*">
          <label row={0} style={styles.transactionsSectionTitle} text="Recent Transactions" />
          <stackLayout row={1}>
            {transactions.length > 0 ? (
              transactions.slice(0, 5).map((transaction) => (
                <gridLayout key={transaction.id} style={styles.transactionItem} rows="auto, auto" columns="*, auto">
                  <label row={0} col={0} text={transaction.description} style={styles.transactionDescription} />
                  <label row={0} col={1} text={formatBalance(transaction.amount)} 
                    style={[styles.transactionAmount, 
                      transaction.type.toLowerCase().includes('withdrawal') ? 
                        styles.negativeAmount : styles.positiveAmount]} />
                  <label row={1} col={0} text={transaction.date} style={styles.transactionDate} />
                  <label row={1} col={1} text={`Balance: ${formatBalance(transaction.runningBalance)}`} 
                    style={styles.transactionBalance} />
                </gridLayout>
              ))
            ) : (
              <label style={styles.noTransactionsLabel} text="No recent transactions" />
            )}
          </stackLayout>
        </gridLayout>

        {/* Quick Actions Card */}
        <gridLayout style={styles.quickActionsCard} rows="auto, auto" columns="*">
          <label row={0} style={styles.quickActionsSectionTitle} text="Quick Actions" />
          <gridLayout row={1} columns="*, *" style={styles.quickActionsContainer}>
            <button col={0} style={[styles.actionButton, styles.investButton]} 
              text="Invest" onTap={() => navigation.navigate("Investments", { userData })} />
            <button col={1} style={[styles.actionButton, styles.withdrawButton]} 
              text="Withdraw" onTap={() => navigation.navigate("Withdraw")} />
          </gridLayout>
        </gridLayout>
      </>
    );
  };

  const fetchTransactions = useCallback(async (accountId: number) => {
    try {
      console.log('\n========== FETCHING TRANSACTIONS ==========');
      console.log('Account ID:', accountId);
      console.log('App Auth Token:', appAuthToken);

      if (!appAuthToken) {
        console.error('App authentication token is missing in PortfolioScreen');
        throw new Error('App authentication token is missing');
      }

      const today = new Date();
      const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      
      const formatDateStr = (date: Date) => {
        return date.toISOString().split('T')[0];
      };

      const fromDate = formatDateStr(oneMonthAgo);
      const toDate = formatDateStr(today);

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.SAVINGS_ACCOUNTS_ENDPOINT}/${accountId}/transactions/search?fromDate=${fromDate}&toDate=${toDate}&fromSubmittedDate=${fromDate}&toSubmittedDate=${toDate}&fromAmount=1&toAmount=50000000&types=1,2,3,4,20,21&orderBy=createdDate%2CtransactionDate%2Cid&sortOrder=DESC&dateFormat=yyyy-MM-dd`;

      console.log('Making request with URL:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${appAuthToken}`,
          'fineract-platform-tenantid': TENANT_ID,
          'accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log('Transaction Data:', JSON.stringify(data, null, 2));

      if (data && data.content && Array.isArray(data.content)) {
        const formattedTransactions = data.content.map((t: any) => ({
          id: t.id,
          date: new Date(t.date[0], t.date[1] - 1, t.date[2]).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          amount: t.amount,
          type: t.transactionType?.value || 'Transaction',
          description: t.paymentDetailData?.receiptNumber || t.transactionType?.value || 'Transaction',
          runningBalance: t.runningBalance || 0
        }));

        console.log('Formatted Transactions:', formattedTransactions);
        setTransactions(formattedTransactions);
      } else {
        console.warn('No transactions found or invalid data structure:', data);
        setTransactions([]);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    }
  }, [appAuthToken]);

  if (loading) {
    return (
      <gridLayout rows="*, auto">
        <activityIndicator busy={true} row={0} />
        <NavigationBar row={1} activeRoute="Portfolio" navigation={navigation} userData={userData} />
      </gridLayout>
    );
  }

  if (error) {
    return (
      <gridLayout rows="*, auto">
        <label text={error} row={0} style={styles.errorText} />
        <NavigationBar row={1} activeRoute="Portfolio" navigation={navigation} userData={userData} />
      </gridLayout>
    );
  }

  return (
    <gridLayout rows="*, auto">
      <scrollView row={0}>
        <stackLayout style={styles.container}>
          {loading ? (
            <stackLayout style={styles.loaderContainer}>
              <activityIndicator busy={true} style={styles.loader} />
            </stackLayout>
          ) : error ? (
            <label text={error} style={styles.errorText} />
          ) : selectedProductId ? (
            // Add null check for found account
            (() => {
              const selectedAccount = accounts.find(acc => acc.id === selectedProductId);
              return selectedAccount ? 
                renderProductDetailView(selectedAccount) : 
                <label text="Account not found" style={styles.errorText} />;
            })()
          ) : (
            // Show regular portfolio view
            <>
              <label text="Your Portfolio" style={styles.headerText} />
              {accounts && accounts.length > 0 ? accounts.map((account) => (
                <gridLayout key={account.id} style={styles.card} rows="auto, auto" 
                  columns="*, auto" onTap={() => handleProductSelect(account)}>
                  <label row={0} col={0} text={account.productName || 'N/A'} style={styles.productName} />
                  <label row={0} col={1} text={formatCurrency(account.accountBalance, account.currency?.displaySymbol || 'KSh')} 
                    style={styles.accountBalance} />
                  <label row={1} col={0} text={`Account: ${account.accountNo || 'N/A'}`} 
                    style={styles.accountNumber} />
                </gridLayout>
              )) : (
                <label text="No accounts found" style={styles.noAccountsLabel} />
              )}
            </>
          )}
        </stackLayout>
      </scrollView>
      <NavigationBar 
        row={1} 
        activeRoute="Portfolio" 
        navigation={navigation} 
        userData={{...userData, username, password, appAuthToken}}
      />
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    textAlignment: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 8,
  },
  totalInvestment: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  breakdownTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#212121",
    marginTop: 16,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
  },
  accountNumber: {
    fontSize: 14,
    color: "#757575",
    textAlignment: "right",
  },
  accountBalance: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 8,
  },
  accountStatus: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },
  lastTransaction: {
    fontSize: 14,
    color: "#757575",
    marginTop: 4,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlignment: "center",
  },
  loader: {
    margin: 16,
  },
  backButtonContainer: {
    marginBottom: 15,
  },
  backButton: {
    fontSize: 16,
    color: "#4A90E2",
    padding: 8,
    width: 100,
    textAlignment: "left",
  },
  productDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlignment: "center",
  },
  savingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 8,
  },
  accountNumber: {
    fontSize: 14,
    color: "#757575",
    textAlignment: "right",
  },
  accountBalance: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    marginTop: 8,
  },
  transactionsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  transactionsSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
  },
  transactionItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
  },
  transactionDescription: {
    fontSize: 16,
    color: "#333333",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  positiveAmount: {
    color: "#4CD964",
  },
  negativeAmount: {
    color: "#FF3B30",
  },
  transactionDate: {
    fontSize: 14,
    color: "#777777",
  },
  transactionBalance: {
    fontSize: 14,
    color: "#777777",
  },
  noTransactionsLabel: {
    fontSize: 14,
    color: "#757575",
    textAlignment: "center",
  },
  quickActionsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },
  quickActionsSectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 15,
  },
  quickActionsContainer: {
    marginTop: 15,
  },
  actionButton: {
    fontSize: 16,
    color: "#FFFFFF",
    borderRadius: 25,
    padding: 12,
    margin: 4,
    textAlignment: "center",
    elevation: 3,
  },
  investButton: {
    backgroundColor: "#4CAF50",
  },
  withdrawButton: {
    backgroundColor: "#2196F3",
  },
  noAccountsLabel: {
    fontSize: 16,
    color: "#777777",
    textAlignment: "center",
    marginTop: 20,
  },
});
