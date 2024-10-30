import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { GridLayout, Label, ScrollView, StackLayout } from "@nativescript/core";
import { API_CONFIG, TENANT_ID } from "../config";
import { NavigationBar } from "./NavigationBar";

type DashboardScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Dashboard">,
  route: { params: { userData: any, username: string, password: string, appAuthToken: string } }
};

type Transaction = {
  id: number;
  date: string;
  amount: number;
  type: string;
  description: string;
  runningBalance: number;
};

// Add new types for better type safety
type Product = {
  id: number;
  productName: string;
  accountNo: string;
  accountBalance: number;
  productType: string;
};

export function DashboardScreen({ navigation, route }: DashboardScreenProps) {
  const { userData, username, password, appAuthToken } = route.params;
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Add this function to get the display name
  const getDisplayName = () => {
    if (userData.firstName) {
      return userData.firstName.split(' ')[0];
    } else if (userData.displayName) {
      return userData.displayName.split(' ')[0];
    } else if (userData.name) {
      return userData.name.split(' ')[0];
    } else if (userData.username) {
      return userData.username;
    } else {
      return 'User';
    }
  };

  const formatBalance = (balance: number | undefined): string => {
    if (balance === undefined || isNaN(balance)) {
      return "KSh 0.00";
    }
    const parts = balance.toFixed(2).split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `KSh ${parts.join(".")}`;
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Add function to calculate total balance
  const calculateTotalBalance = useCallback((productList: Product[]) => {
    return productList.reduce((total, product) => total + (product.accountBalance || 0), 0);
  }, []);

  // Update fetchSavingsAccount to handle multiple products
  const fetchSavingsAccounts = useCallback(async () => {
    try {
      console.log("Fetching savings accounts information...");
      const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.SELF_CLIENTS_ENDPOINT}/${userData.id}/accounts`;
      console.log("API URL:", url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': TENANT_ID,
          'accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log("Accounts response:", JSON.stringify(data, null, 2));

      if (data.savingsAccounts && Array.isArray(data.savingsAccounts)) {
        const formattedProducts = data.savingsAccounts.map((account: any) => ({
          id: account.id,
          productName: account.productName,
          accountNo: account.accountNo,
          accountBalance: account.accountBalance,
          productType: 'savings'
        }));
        
        setProducts(formattedProducts);
        
        // If only one product, fetch its transactions
        if (formattedProducts.length === 1) {
          fetchTransactions(formattedProducts[0].id);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching accounts:", error);
      setIsLoading(false);
    }
  }, [userData.id, username, password]);

  const fetchTransactions = useCallback(async (accountId: number) => {
    if (!appAuthToken) {
      console.error("App authentication token is not available.");
      return;
    }

    try {
      const today = new Date();
      const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
      const fromDate = formatDate(oneMonthAgo);
      const toDate = formatDate(today);

      const userAuthHeader = `Basic ${btoa(`${username}:${password}`)}`;
      console.log("User Authentication Token for transactions:", userAuthHeader);
      console.log("App Authentication Token for transactions:", appAuthToken);

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.SAVINGS_ACCOUNTS_ENDPOINT}/${accountId}/transactions/search?fromDate=${fromDate}&toDate=${toDate}&fromSubmittedDate=${fromDate}&toSubmittedDate=${toDate}&fromAmount=1&toAmount=50000000&types=1,2,3,4,20,21&orderBy=createdDate%2CtransactionDate%2Cid&sortOrder=DESC&dateFormat=yyyy-MM-dd`;

      console.log("Fetching transactions from URL:", url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${appAuthToken}`,
          'fineract-platform-tenantid': TENANT_ID,
          'accept': 'application/json'
        }
      });

      const responseText = await response.text();
      console.log("Full transaction response:", responseText);

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        return;
      }

      console.log("Parsed transaction data:", JSON.stringify(data, null, 2));

      if (data && data.content && Array.isArray(data.content)) {
        setTransactions(data.content.map((t: any) => ({
          id: t.id,
          date: `${t.date[0]}-${t.date[1].toString().padStart(2, '0')}-${t.date[2].toString().padStart(2, '0')}`,
          amount: t.amount,
          type: t.transactionType.value,
          description: t.paymentDetailData?.paymentType?.name || t.transactionType.value,
          runningBalance: t.runningBalance
        })));
      } else {
        console.error("Unexpected data structure:", data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [username, password, appAuthToken]);

  useEffect(() => {
    fetchSavingsAccounts();
  }, [fetchSavingsAccounts]);

  const handleLogout = () => {
    console.log("Logging out...");
    navigation.navigate("Login");
  };

  const handleNavigateToPortfolio = () => {
    console.log('Navigating to Portfolio with token:', appAuthToken);
    navigation.navigate("Portfolio", {
      userData,
      username,
      password,
      appAuthToken // Pass the appAuthToken
    });
  };

  // Update handleProductSelect function
  const handleProductSelect = (product: Product) => {
    console.log('Selected product:', product);
    console.log('App Auth Token:', appAuthToken); // Log to verify token
    setSelectedProductId(product.id);
    fetchTransactions(product.id);
  };

  // Add new function to render detailed product view
  const renderProductDetailView = (product: Product) => (
    <>
      {/* Back Button */}
      <gridLayout style={styles.backButtonContainer} rows="auto" columns="auto, *">
        <button col={0} style={styles.backButton} text="← Back" 
          onTap={() => setSelectedProductId(null)} />
        <label col={1} style={styles.productDetailTitle} text="Product Details" />
      </gridLayout>

      {/* Balance Card */}
      <gridLayout style={styles.savingsCard} rows="auto, auto, auto" columns="*">
        <label row={0} style={styles.sectionTitle} text={product.productName} />
        <label row={1} style={styles.accountNumber} text={`Account: ${product.accountNo}`} />
        <label row={2} style={styles.accountBalance} text={`${formatBalance(product.accountBalance)}`} />
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
                <label row={1} col={1} text={`Balance:${formatBalance(transaction.runningBalance)}`} 
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

  // Update the render method to show different views based on number of products
  const renderSingleProductView = (product: Product) => (
    <>
      {/* Balance Card */}
      <gridLayout style={styles.savingsCard} rows="auto, auto, auto" columns="*">
        <label row={0} style={styles.sectionTitle} text={product.productName} />
        <label row={1} style={styles.accountNumber} text={`Account: ${product.accountNo}`} />
        <label row={2} style={styles.accountBalance} text={`${formatBalance(product.accountBalance)}`} />
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

  const renderMultipleProductsView = () => (
    <>
      {/* Total Balance Card */}
      <gridLayout style={styles.totalBalanceCard} rows="auto, auto" columns="*">
        <label row={0} style={styles.sectionTitle} text="Total Portfolio" />
        <label row={1} style={styles.totalBalance} text={formatBalance(calculateTotalBalance(products))} />
      </gridLayout>

      {/* Products Summary Card */}
      <gridLayout style={styles.productsCard} rows="auto, auto" columns="*">
        <label row={0} style={styles.cardTitle} text="Products Summary" />
        <stackLayout row={1}>
          {products.map((product) => (
            <gridLayout key={product.id} style={styles.productItem} rows="auto, auto" 
              columns="*, auto" onTap={() => handleProductSelect(product)}>
              <label row={0} col={0} text={product.productName} style={styles.productName} />
              <label row={0} col={1} text={formatBalance(product.accountBalance)} style={styles.productBalance} />
              <label row={1} col={0} text={`Account: ${product.accountNo}`} style={styles.productAccount} />
            </gridLayout>
          ))}
        </stackLayout>
      </gridLayout>

      {/* Quick Actions Card */}
      <gridLayout style={styles.quickActionsCard} rows="auto, auto" columns="*">
        <label row={0} style={styles.cardTitle} text="Quick Actions" />
        <gridLayout row={1} columns="*, *, *" style={styles.quickActionsContainer}>
          <button col={0} style={[styles.actionButton, styles.investButton]} text="Invest" 
            onTap={() => navigation.navigate("Investments", { userData })} />
          <button col={1} style={[styles.actionButton, styles.withdrawButton]} text="Withdraw" 
            onTap={() => navigation.navigate("Withdraw")} />
          <button col={2} style={[styles.actionButton, styles.loanButton]} text="Loans" 
            onTap={() => navigation.navigate("Loans", { userData })} />
        </gridLayout>
      </gridLayout>
    </>
  );

  return (
    <gridLayout rows="*, auto">
      <scrollView row={0}>
        <stackLayout style={styles.container}>
          <label text={`Welcome, ${getDisplayName()}!`} style={styles.headerText} />
          
          {isLoading ? (
            <stackLayout style={styles.loaderContainer}>
              <activityIndicator busy={true} style={styles.loader} />
            </stackLayout>
          ) : (
            products.length === 1 ? renderSingleProductView(products[0]) : 
            selectedProductId ? 
              renderProductDetailView(products.find(p => p.id === selectedProductId)!) :
              renderMultipleProductsView()
          )}
        </stackLayout>
      </scrollView>
      <NavigationBar 
        row={1} 
        activeRoute="Dashboard" 
        navigation={navigation} 
        userData={{...userData, username, password, appAuthToken}} // Include appAuthToken
      />
    </gridLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#193743",
    paddingBottom: 80,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5F5F5",
    marginBottom: 20,
  },
  savingsCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  accountNumber: {
    fontSize: 16,
    color: "#E0E0E0",
    marginBottom: 5,
  },
  accountBalance: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  noAccountLabel: {
    fontSize: 16,
    color: "#E0E0E0",
    textAlignment: "center",
  },
  transactionsCard: {
    backgroundColor: "#a6ecde",
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
  transactionType: {
    fontSize: 14,
    color: "#777777",
  },
  noTransactionsLabel: {
    fontSize: 16,
    color: "#777777",
    textAlignment: "center",
    marginTop: 15,
  },
  quickActionsCard: {
    backgroundColor: "#FE632A",
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
    borderRadius: 25, // Increased border radius for more rounded corners
    padding: 12,
    margin: 4,
    textAlignment: "center",
    elevation: 3,
  },
  investButton: {
    backgroundColor: "#4CAF50", // Green color for Invest
  },
  withdrawButton: {
    backgroundColor: "#2196F3", // Blue color for Withdraw
  },
  loanButton: {
    backgroundColor: "#FFC107", // Amber color for Loans
  },
  totalBalanceCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  totalBalance: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  productsCard: {
    backgroundColor: "#c5eaea",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    elevation: 3,
  },
  productItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 5, // Added spacing between items
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  productBalance: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  productAccount: {
    fontSize: 14,
    color: "#777777",
  },
  loaderContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    width: 32,
    height: 32,
  },
  transactionBalance: {
    fontSize: 14,
    color: "#777777",
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
    color: "#F5F5F5",
    textAlignment: "center",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 20, // Increased spacing
    textTransform: "none", // Remove uppercase
  },
});
