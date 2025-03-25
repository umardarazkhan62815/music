/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { LogBox, SafeAreaView } from "react-native";
import AppNavigator from "./Apps/navigations/AppNavigator";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MobileAds from "react-native-google-mobile-ads";

function App(): JSX.Element {
  MobileAds()
    .initialize()
    .then((adapterStatuses) => {
      console.log("adapterStatuses", adapterStatuses);
    });

  LogBox.ignoreAllLogs(true);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
