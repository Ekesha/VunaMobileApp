import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { LoginScreen } from "./LoginScreen";
import { SignupScreen } from "./SignupScreen";
import { SignupSuccessScreen } from "./SignupSuccessScreen";
import { DashboardScreen } from "./DashboardScreen";
import { InvestmentsScreen } from "./InvestmentsScreen";
import { ProductsScreen } from "./ProductsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { ContributionScreen } from "./ContributionScreen";
import { ContributionSuccessScreen } from "./ContributionSuccessScreen";
import { WithdrawScreen } from "./WithdrawScreen";
import { WithdrawSuccessScreen } from "./WithdrawSuccessScreen";
import { PortfolioScreen } from "./PortfolioScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <StackNavigator.Screen name="Login" component={LoginScreen} />
            <StackNavigator.Screen name="Signup" component={SignupScreen} />
            <StackNavigator.Screen name="SignupSuccess" component={SignupSuccessScreen} />
            <StackNavigator.Screen 
                name="Dashboard" 
                component={DashboardScreen}
                initialParams={{ userData: null }}
            />
            <StackNavigator.Screen 
                name="Portfolio" 
                component={PortfolioScreen}
                initialParams={{ userData: null }}
            />
            <StackNavigator.Screen 
                name="Investments" 
                component={InvestmentsScreen}
                initialParams={{ userData: null }}
            />
            <StackNavigator.Screen 
                name="Profile" 
                component={ProfileScreen}
                initialParams={{ userData: null }}
            />
            <StackNavigator.Screen name="Contribution" component={ContributionScreen} />
            <StackNavigator.Screen name="ContributionSuccess" component={ContributionSuccessScreen} />
            <StackNavigator.Screen name="Withdraw" component={WithdrawScreen} />
            <StackNavigator.Screen name="WithdrawSuccess" component={WithdrawSuccessScreen} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
