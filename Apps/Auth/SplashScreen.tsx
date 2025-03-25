import React, { useEffect } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import splash from "./../assets/splash.gif";
import FastImage from "react-native-fast-image";
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("TabNavigator");
    }, 1500);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FastImage
        source={splash}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </View>
  );
};
export default SplashScreen;
