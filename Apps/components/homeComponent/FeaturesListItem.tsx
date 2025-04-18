import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { getYoutubeMeta } from "react-native-youtube-iframe";
var emitter = require("tiny-emitter/instance");
const FeaturesListItem = ({ item }) => {
  const navigation = useNavigation();
  const [youtubeMeta, setYoutubeMeta] = useState(null);
  const isDarkTheme = false;

  useEffect(() => {
    getYoutubeMeta(item?.video)
      .then((meta) => {
        setYoutubeMeta(meta);
      })
      .catch((error) => console.log("Error fetching YouTube meta:", error));
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("PlayerScreen", {
          video: item?.list,
        });
      }}
    >
      {youtubeMeta && (
        <FastImage
          source={{ uri: youtubeMeta?.thumbnail_url }}
          style={styles.image}
        />
      )}
      <Text
        style={[
          styles.nameText,
          { color: isDarkTheme ? "#FFFFFF" : "#000000" },
        ]}
        numberOfLines={3}
      >
        {youtubeMeta?.title}
      </Text>
      <Text
        style={[
          styles.artistNameText,
          { color: isDarkTheme ? "#FFFFFFB2" : "#000000B2" },
        ]}
      >
        {youtubeMeta?.author_name}
      </Text>
    </TouchableOpacity>
  );
};

export default FeaturesListItem;

const styles = StyleSheet.create({
  container: { marginHorizontal: 10, gap: 4 },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 10,
    resizeMode: "contain",
  },
  nameText: {
    fontSize: 14,
    fontWeight: "700",
    width: "90%",
    color: "#111",
  },
  artistNameText: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111",
  },
});
