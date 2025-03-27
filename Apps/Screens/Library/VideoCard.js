import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { getYoutubeMeta } from "react-native-youtube-iframe";
const VideoCard = ({ item, onPress }) => {
  const [youtubeMeta, setYoutubeMeta] = useState(null);
  const isDarkTheme = false;

  useEffect(() => {
    getYoutubeMeta(item)
      .then((meta) => {
        setYoutubeMeta(meta);
      })
      .catch((error) => console.log("Error fetching YouTube meta:", error));
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      {youtubeMeta && (
        <FastImage
          source={{ uri: youtubeMeta?.thumbnail_url }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Text
        style={[
          styles.nameText,
          { color: isDarkTheme ? "#FFFFFF" : "#000000" },
        ]}
        numberOfLines={2}
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

export default VideoCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    gap: 4,
    width: "45%",
    // alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    resizeMode: "contain",
  },
  nameText: {
    fontSize: 10,
    fontWeight: "700",
    width: "90%",
    color: "#111",
  },
  artistNameText: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111",
  },
});
