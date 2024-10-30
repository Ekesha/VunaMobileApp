import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FlexboxLayout, StackLayout, Label } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type NavigationBarProps = {
  activeRoute: string;
  navigation: any;
  row?: number; // Add row as optional prop
  userData: {
    username: string;
    password: string;
    appAuthToken: string;
    [key: string]: any;
  };
};

const menuItems = [
  { name: 'Home', route: 'Dashboard' },
  { name: 'My Portfolio', route: 'Portfolio' },
  { name: 'Invest', route: 'Investments' },
  { name: 'My Profile', route: 'Profile' },
];

export function NavigationBar({ activeRoute, navigation, userData, row }: NavigationBarProps) {
  const handleNavigation = (route: keyof MainStackParamList) => {
    if (route !== activeRoute) {
      console.log("Navigating to:", route);
      console.log("userData being passed:", JSON.stringify(userData, null, 2));
      navigation.navigate(route, { 
        userData,
        username: userData?.username,
        password: userData?.password,
        appAuthToken: userData?.appAuthToken // Make sure to pass appAuthToken
      });
    }
  };

  return (
    <flexboxLayout row={row} style={styles.menuBar}>
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          {index > 0 && <label style={styles.separator} />}
          <stackLayout
            style={[
              styles.menuItem, 
              activeRoute === item.route && styles.activeMenuItem
            ]}
            onTap={() => handleNavigation(item.route as keyof MainStackParamList)}
          >
            <label 
              text={item.name} 
              style={[
                styles.menuLabel,
                activeRoute === item.route && styles.activeMenuLabel
              ]} 
            />
          </stackLayout>
        </React.Fragment>
      ))}
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    backgroundColor: "#FFFFFF",
    height: 60,
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  menuItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeMenuItem: {
    borderTopWidth: 2,
    borderTopColor: "#007AFF",
  },
  menuLabel: {
    fontSize: 12,
    color: "#757575",
    textAlignment: "center",
  },
  activeMenuLabel: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  separator: {
    width: 1,
    height: "60%",
    backgroundColor: "#E0E0E0",
  },
});
