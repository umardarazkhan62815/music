import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FastImage from "react-native-fast-image";
import { useIsFocused } from "@react-navigation/native";
import { heart, list } from "../utils/images";

const PlayList = ({ favList, showRadio, clickCallback, onSelect }) => {
  console.log(JSON.stringify(favList?.id));

  const [playlistSongCount, setPlaylistSongCount] = useState(0);
  const isDarkTheme = false;

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      const songsCount = 10;
      setPlaylistSongCount(songsCount);
    }
  }, [isFocused]);
  return (
    <TouchableOpacity
      style={styles.favMainContainer}
      onPress={() => {
        if (clickCallback && clickCallback !== null) {
          clickCallback();
        }
        if (showRadio) {
          onSelect(favList);
        }
      }}
    >
      <View style={styles.favContainer}>
        {favList?.id === "FavoritesId" || playlistSongCount?.length === 0 ? (
          favList?.id === "FavoritesId" ? (
            <FastImage
              style={styles.heartIcon}
              source={heart}
              tintColor={"#FFFFFF"}
            />
          ) : (
            <FastImage
              style={styles.heartIcon}
              source={list}
              tintColor={"#FFFFFF"}
            />
          )
        ) : (
          <FastImage style={styles.thumbnailIcon} source={favList.image} />
        )}
      </View>
      <View style={styles.btnContainer}>
        <Text
          style={[styles.favBtn, { color: isDarkTheme ? "white" : "black" }]}
        >
          {favList?.id === "FavoritesId" ? "Favorites" : favList.name}
        </Text>
        <Text
          style={[
            styles.totalSong,
            { color: isDarkTheme ? "#FFFFFF66" : "#00000066" },
          ]}
        >
          Playlist . 10 {playlistSongCount?.length !== 1 ? "songs" : "song"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  favMainContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  favContainer: {
    backgroundColor: "#F85D2C",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flex: 1,
    marginLeft: 8,
    justifyContent: "center",
  },
  favBtn: {
    fontSize: 13,
    fontWeight: "500",
  },
  totalSong: {
    fontSize: 11,
    color: "grey",
    marginTop: 5,
    fontWeight: "500",
  },
  checkBtn: {
    tintColor: "#F24949",
  },
  uncheckBtn: {
    tintColor: "#D4D4D4",
  },
  thumbnailIcon: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  heartIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
