import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { GridLayout, Label, ScrollView, StackLayout } from "@nativescript/core";
import { API_CONFIG, TENANT_ID, APP_AUTH } from "../config";
import { NavigationBar } from "./NavigationBar";

type InvestmentsScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Investments">;
  route: { params: { userData: any } };
};

type SavingsProduct = {
  id: number;
  name: string;
  shortName: string;
  description: string;
  currency: {
    code: string;
    displaySymbol: string;
  };
  nominalAnnualInterestRate: number;
};

export function InvestmentsScreen({ navigation, route }: InvestmentsScreenProps) {
  const { userData } = route.params;
  const [products, setProducts] = useState<SavingsProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSavingsProducts();
  }, []);

  const fetchSavingsProducts = async () => {
    try {
      console.log("Fetching savings products...");
      const authHeader = `Basic ${btoa(`${APP_AUTH.USERNAME}:${APP_AUTH.PASSWORD}`)}`;
      console.log("App Authentication Token:", authHeader);

      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.SAVINGS_PRODUCTS_ENDPOINT}`;
      console.log("Savings products API URL:", url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': authHeader,
          'fineract-platform-tenantid': TENANT_ID,
          'accept': 'application/json'
        }
      });

      const data = await response.json();
      console.log("Savings products response:", JSON.stringify(data, null, 2));

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching savings products:", error);
      setError("Failed to load savings products. Please try again.");
      setLoading(false);
    }
  };

  const handleProductSelect = (product: SavingsProduct) => {
    console.log("Selected product:", product);
    navigation.navigate("ProductDetails", { 
      product, 
      userData,
      username: userData?.username,
      password: userData?.password
    });
  };

  return (
    <gridLayout rows="*, auto">
      <gridLayout row={0} rows="auto, *" style={styles.mainContainer}>
        <label row={0} text="Investment Options" style={styles.headerText} />
        <scrollView row={1}>
          <stackLayout style={styles.container}>
            {loading ? (
              <label text="Loading products..." style={styles.loadingText} />
            ) : error ? (
              <label text={error} style={styles.errorText} />
            ) : (
              products.map((product) => (
                <gridLayout 
                  key={product.id} 
                  style={styles.productCard} 
                  rows="auto, auto, auto, auto" 
                  columns="*"
                  onTap={() => handleProductSelect(product)}
                  className="product-card"
                >
                  <label row={0} text={product.name} style={styles.productName} />
                  <label row={1} text={product.description} style={styles.productDescription} textWrap={true} />
                  <gridLayout row={2} rows="auto, auto" columns="*, *" style={styles.detailsContainer}>
                    <label row={0} col={0} text="Interest Rate:" style={styles.detailLabel} />
                    <label row={0} col={1} text={`${product.nominalAnnualInterestRate}%`} style={styles.detailValue} />
                    <label row={1} col={0} text="Currency:" style={styles.detailLabel} />
                    <label row={1} col={1} text={`${product.currency.displaySymbol} ${product.currency.code}`} style={styles.detailValue} />
                  </gridLayout>
                  <label row={3} text="Tap to view details" style={styles.tapHint} />
                </gridLayout>
              ))
            )}
          </stackLayout>
        </scrollView>
      </gridLayout>
      <NavigationBar 
        row={1} 
        activeRoute="Investments" 
        navigation={navigation} 
        userData={userData} 
      />
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F0F4F8", // Light blue-gray background
  },
  container: {
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlignment: "center",
    marginVertical: 20,
    color: "#2C3E50", // Dark blue-gray color for header
  },
  loadingText: {
    fontSize: 18,
    textAlignment: "center",
    color: "#34495E", // Dark gray color for loading text
  },
  errorText: {
    fontSize: 18,
    color: "#E74C3C", // Red color for error text
    textAlignment: "center",
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#BDC3C7", // Light gray border
    borderWidth: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2980B9", // Blue color for product name
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 15,
    color: "#34495E", // Dark gray color for description
  },
  detailsContainer: {
    marginBottom: 10,
    backgroundColor: "#ECF0F1", // Very light gray background for details
    padding: 10,
    borderRadius: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: "#7F8C8D", // Medium gray color for labels
    textAlignment: "left",
    marginBottom: 5, // Add some bottom margin
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2C3E50", // Dark blue-gray color for values
    textAlignment: "right",
    marginBottom: 5, // Add some bottom margin
  },
  tapHint: {
    fontSize: 14,
    color: "#7F8C8D", // Medium gray color for hint
    textAlignment: "center",
    fontStyle: "italic",
    marginTop: 10, // Add some top margin
  },
});
