import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const Divider = () => {
  const isDarkThemeTheme = false;

  const dividerColor = isDarkThemeTheme
    ? "rgba(255, 255, 255, 0.15)"
    : "rgba(0, 0, 0, 0.15)";

  return (
    <View
      style={{
        height: 0.5,
        marginTop: 15,
        backgroundColor: dividerColor,
      }}
    />
  );
};

export default Divider;
