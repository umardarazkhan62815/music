import { React } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { plus, more } from "../utils/images";

const SongComponent = ({ isMore, songData, itemClicked, favClicked }) => {
  const isDarkThemeTheme = false;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => {
          itemClicked();
        }}
      >
        <FastImage style={styles.songImg} source={songData.image}>
          <View style={styles.timeContainer}>
            <Text style={styles.playTime}>{songData.duration}</Text>
          </View>
        </FastImage>
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.titleName,
              { color: isDarkThemeTheme ? "#FFFFFF" : "#000000" },
            ]}
          >
            {songData.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              styles.artistName,
              { color: isDarkThemeTheme ? "#FFFFFF66" : "#00000066" },
            ]}
          >
            {songData.artist}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (isMore) {
            favClicked();
            return;
          }
          setAddFavorite(true);
        }}
      >
        <FastImage
          style={isMore === true ? styles.moreIcon : styles.addIcon}
          source={isMore === true ? more : plus}
          tintColor={isMore ? "#grey" : "#F24949"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SongComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  playIcon: {
    width: 24,
    height: 24,
  },
  songImg: {
    height: 60,
    width: 56,
    borderRadius: 6,
    overflow: "hidden",
  },
  timeContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  playTime: {
    color: "white",
    fontWeight: "600",
    padding: 5,
    fontSize: 10,
  },
  videoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  titleName: {
    fontSize: 13,
    fontWeight: "600",
    marginVertical: 5,
  },
  artistName: {
    marginRight: "30%",
    fontSize: 11,
    fontWeight: "600",
  },
  addIcon: {
    height: 20,
    width: 20,
  },
  moreIcon: {
    tintColor: "grey",
    height: 20,
    width: 20,
  },
  playButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
