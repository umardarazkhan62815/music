import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
        <Image
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
  image: { width: 124, height: 124, borderRadius: 10, resizeMode: "contain" },
  nameText: { marginStart: 5, fontSize: 14, fontWeight: "700", width: 130 },
  artistNameText: { marginStart: 5, fontSize: 12, fontWeight: "600" },
});
