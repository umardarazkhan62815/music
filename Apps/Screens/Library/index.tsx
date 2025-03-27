import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import Divider from "../../components/Divider";
import { getRecentlyPlayed } from "../../helper/RecentData";
import YoutubeIframe from "react-native-youtube-iframe";
import VideoCard from "./VideoCard";
import { useIsFocused } from "@react-navigation/native";

const Library = ({ navigation }) => {
  const [currentVideo, setCurrentVideo] = useState("");
  const [list, setList] = useState([]);
  const [paused, setPaused] = useState(false);
  const isfocused = useIsFocused();
  useEffect(() => {
    getRecentVideos();
  }, [isfocused]);

  const getRecentVideos = async () => {
    const vidoes = await getRecentlyPlayed();

    if (vidoes?.length > 0) {
      setList(vidoes);
      setCurrentVideo(vidoes[0]);
    } else {
      setList([]);
      setCurrentVideo("");
    }
  };
  const isDarkTheme = false;
  return (
    <View style={styles.container}>
      <HeaderComponent text="Library" isBack={false} navigation={undefined} />
      <Divider />
      {currentVideo !== "" && (
        <YoutubeIframe height={230} play={paused} videoId={currentVideo} />
      )}
      <View style={{ flex: 1, paddingBottom: 100 }}>
        <View style={styles.header}>
          <Text
            style={[
              styles.headingTitleText,
              { color: isDarkTheme ? "#FFFFFF" : "#000000" },
            ]}
          >
            Recently Played
          </Text>
        </View>

        <View style={styles.listView}>
          <FlatList
            numColumns={2}
            data={list}
            renderItem={({ item }) => (
              <VideoCard
                item={item}
                onPress={(val) => {
                  setCurrentVideo(val);
                  setPaused(false);
                }}
              />
            )}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={styles.noTxt}>{"No Video played yet"}</Text>
            }
          />
        </View>
      </View>
    </View>
  );
};
export default Library;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  moreArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moreText: {
    color: "#F24949",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 12,
  },
  moreArrow: {
    width: 12,
    height: 12,
    marginStart: 3,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  playListHeader: {
    marginHorizontal: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  headingTitleText: {
    fontSize: 16,
    fontWeight: "700",
  },
  listView: {
    marginTop: 20,
  },
  noTxt: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
