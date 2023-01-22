import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import AddNewAssetScreen from "../screens/AddNewAssetScreen";
import MessageScreen from "../screens/MessageScreen";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    
    <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ title: 'My home' }}
        />
    </Stack.Navigator>
  );
};

export default Navigation;
