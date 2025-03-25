import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { back, plus } from "../utils/images";
import FastImage from "react-native-fast-image";
import { iconColor } from "../utils/colors";

const HeaderComponent = ({ text, isBack, navigation, onPressAdd }) => {
  const isDarkTheme = false;
  return (
    <View style={styles.headerContainer}>
      {!!isBack && (
        <TouchableOpacity
          style={styles.backIconView}
          onPress={() => {
            navigation.pop();
          }}
        >
          <FastImage source={back} style={styles.backIcon} tintColor={"#111"} />
        </TouchableOpacity>
      )}
      <Text
        style={[
          styles.headerTitleText,
          { color: isDarkTheme ? "#FFFFFF" : "#000000" },
        ]}
      >
        {text}
      </Text>
      {onPressAdd && (
        <TouchableOpacity
          style={styles.plushIconView}
          onPress={() => {
            onPressAdd();
          }}
        >
          <FastImage source={plus} style={styles.plus} tintColor={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default HeaderComponent;

const styles = StyleSheet.create({
  headerTitleText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "700",
    color: "#000000",
    alignSelf: "center",
  },
  headerContainer: {
    marginTop: 20,
  },
  backIconView: {
    position: "absolute",
    paddingHorizontal: 20,
    transform: [{ rotateY: "180deg" }],
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  plus: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  plushIconView: {
    position: "absolute",
    right: 0,
    paddingHorizontal: 20,
    transform: [{ rotateY: "180deg" }],
  },
});
