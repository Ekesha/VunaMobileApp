import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ScrollView, StackLayout, Label, GridLayout } from "@nativescript/core";
import { NavigationBar } from "./NavigationBar";

type LoansScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Loans">,
  route: { params: { userData: any } }
};

export function LoansScreen({ navigation, route }: LoansScreenProps) {
  const { userData } = route.params;

  return (
    <gridLayout rows="*, auto">
      <scrollView row={0}>
        <stackLayout style={styles.container}>
          <label text="Loans Against Portfolio" style={styles.headerText} />
          {/* Add loan options and application process here */}
        </stackLayout>
      </scrollView>
      <NavigationBar row={1} activeRoute="Loans" navigation={navigation} userData={userData} />
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
  // Add more styles as needed
});
