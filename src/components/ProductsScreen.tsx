import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ScrollView, StackLayout, Label, GridLayout } from "@nativescript/core";

type ProductsScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Products">,
};

export function ProductsScreen({ navigation }: ProductsScreenProps) {
  const portfolioData = {
    lastUpdated: "Feb 15, 2024",
    investments: [
      {
        category: "Money Market Funds",
        holdings: [
          {
            provider: "Provider A",
            invested: "KES 600,000",
            currentValue: "KES 648,000",
            returns: "+8%",
            lastContribution: "Jan 30, 2024"
          }
        ],
        totalValue: "KES 648,000",
        allocation: "26.4%"
      },
      {
        category: "SACCOs",
        holdings: [
          {
            provider: "SACCO X",
            invested: "KES 450,000",
            currentValue: "KES 495,000",
            returns: "+10%",
            lastContribution: "Jan 28, 2024"
          }
        ],
        totalValue: "KES 495,000",
        allocation: "20.2%"
      },
      {
        category: "Pension Schemes",
        holdings: [
          {
            provider: "Pension Fund A",
            invested: "KES 800,000",
            currentValue: "KES 856,000",
            returns: "+7%",
            lastContribution: "Feb 1, 2024"
          }
        ],
        totalValue: "KES 856,000",
        allocation: "34.9%"
      },
      {
        category: "Education Policies",
        holdings: [
          {
            provider: "Education Fund A",
            invested: "KES 400,000",
            currentValue: "KES 451,000",
            returns: "+12.75%",
            lastContribution: "Jan 15, 2024"
          }
        ],
        totalValue: "KES 451,000",
        allocation: "18.5%"
      }
    ]
  };

  return (
    <gridLayout rows="*, auto">
      <scrollView row={0}>
        <stackLayout style={styles.container}>
          {/* Investment Breakdown */}
          {portfolioData.investments.map((investment, index) => (
            <gridLayout key={index} style={styles.card} rows="auto, auto, auto" columns="*">
              <gridLayout row={0} columns="*, auto, auto" style={styles.categoryHeader}>
                <label col={0} style={styles.categoryTitle} text={investment.category} />
                <label col={1} style={styles.allocation} text={investment.allocation} />
                <label col={2} style={styles.categoryValue} text={investment.totalValue} />
              </gridLayout>

              {investment.holdings.map((holding, hIndex) => (
                <stackLayout key={hIndex} row={1} style={styles.holdingDetails}>
                  <label style={styles.providerName} text={holding.provider} />
                  <gridLayout columns="*, auto" style={styles.detailRow}>
                    <label col={0} style={styles.detailLabel} text="Amount Invested:" />
                    <label col={1} style={styles.detailValue} text={holding.invested} />
                  </gridLayout>
                  <gridLayout columns="*, auto" style={styles.detailRow}>
                    <label col={0} style={styles.detailLabel} text="Current Value:" />
                    <label col={1} style={styles.detailValue} text={holding.currentValue} />
                  </gridLayout>
                  <gridLayout columns="*, auto" style={styles.detailRow}>
                    <label col={0} style={styles.detailLabel} text="Returns:" />
                    <label col={1} style={[styles.detailValue, styles.returnsValue]} text={holding.returns} />
                  </gridLayout>
                  <gridLayout columns="*, auto" style={styles.detailRow}>
                    <label col={0} style={styles.detailLabel} text="Last Contribution:" />
                    <label col={1} style={styles.detailValue} text={holding.lastContribution} />
                  </gridLayout>
                </stackLayout>
              ))}
            </gridLayout>
          ))}
        </stackLayout>
      </scrollView>

      {/* Navigation Bar */}
      <gridLayout row={1} columns="*, *, *, *" style={styles.navBar}>
        <button col={0} style={styles.navItem} text="Home" onTap={() => navigation.navigate("Dashboard")} />
        <button col={1} style={styles.navItem} text="Invest" onTap={() => navigation.navigate("Investments")} />
        <button col={2} style={[styles.navItem, styles.activeNavItem]} text="Portfolio" />
        <button col={3} style={styles.navItem} text="Profile" onTap={() => navigation.navigate("Profile")} />
      </gridLayout>
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  overviewCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
  },
  totalValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlignment: "center",
  },
  lastUpdated: {
    fontSize: 14,
    color: "#E3F2FD",
    textAlignment: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    elevation: 3,
  },
  categoryHeader: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#212121",
  },
  allocation: {
    fontSize: 16,
    color: "#4A90E2",
    fontWeight: "bold",
    marginRight: 8,
  },
  categoryValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
  },
  holdingDetails: {
    marginTop: 8,
  },
  providerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 8,
  },
  detailRow: {
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: "#757575",
  },
  detailValue: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
  },
  returnsValue: {
    color: "#66BB6A",
  },
  navBar: {
    backgroundColor: "#FFFFFF",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E6F3FF",
  },
  navItem: {
    backgroundColor: "transparent",
    color: "#4A90E2",
    fontSize: 10,
    height: "100%",
    padding: 0,
    textAlignment: "center",
  },
  activeNavItem: {
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: "#FF7043",
    borderRadius: 5,
    margin: 5,
  },
});
