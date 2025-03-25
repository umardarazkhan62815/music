import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Auth/SplashScreen";
import TabNavigator from "./TabNavigator";
import PlayDetail from "../Screens/Library/PlayDetail";
import PlayerScreen from "../Auth/PlayerScreen";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayDetail"
        component={PlayDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlayerScreen"
        component={PlayerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
