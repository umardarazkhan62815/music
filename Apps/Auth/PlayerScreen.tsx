import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import YoutubeIframe from "react-native-youtube-iframe";

import FastImage from "react-native-fast-image";
import { back } from "../utils/images";
import { addToRecentlyPlayed } from "../helper/RecentData";
import { useIsFocused } from "@react-navigation/native";
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";

const PlayerScreen = ({ route, navigation }) => {
  // const adUnitId = "ca-app-pub-1146306938517797/5053676238";
  // const interstitial = InterstitialAd.createForAdRequest(adUnitId);
  // console.log("interstitial", interstitial);
  // const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   if (loaded) {
  //     interstitial.show();
  //   }
  // }, [loaded]);
  // useEffect(() => {
  //   const unsubscribeLoaded = interstitial.addAdEventListener(
  //     AdEventType.LOADED,
  //     () => {
  //       console.log("Hello");
  //       setLoaded(true);
  //     }
  //   );

  //   const unsubscribeOpened = interstitial.addAdEventListener(
  //     AdEventType.OPENED,
  //     () => {
  //       console.log("Hello1");
  //     }
  //   );

  //   const unsubscribeClosed = interstitial.addAdEventListener(
  //     AdEventType.CLOSED,
  //     () => {
  //       console.log("Hello2");
  //     }
  //   );
  //   const unsubscribeError = interstitial.addAdEventListener(
  //     AdEventType.ERROR,
  //     (error) => {
  //       console.log("Hello2", error);
  //     }
  //   );

  //   interstitial.load();

  //   return () => {
  //     unsubscribeLoaded();
  //     unsubscribeOpened();
  //     unsubscribeClosed();
  //   };
  // }, []);

  const video = route?.params.video;
  const API_KEY = "AIzaSyBDWtvdqnVVYeZviH_at0B45upmoNHYcLo";
  const PLAYLIST_ID = video;
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${API_KEY}`;
  const [paused, setPaused] = useState(true);
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const filtteredData = data?.items.filter(
        (item) => item?.snippet?.title !== "Private video"
      );
      setCurrentVideo(filtteredData[0]?.snippet?.resourceId?.videoId);
      setVideos(filtteredData || []);
      await addToRecentlyPlayed(filtteredData[0]?.snippet?.resourceId?.videoId);
    } catch (error) {
      console.error("Error fetching YouTube playlist:", error);
    }
  };
  const hidePlayer = () => {
    navigation.goBack();
  };

  return (
    <View style={[{ flex: 1 }]}>
      <View style={styles.container}>
        <>
          <View style={styles.head}>
            <TouchableOpacity
              onPress={() => hidePlayer()}
              style={{ marginLeft: 10 }}
            >
              <FastImage
                source={back}
                style={{
                  width: 20,
                  height: 20,
                }}
                tintColor={"#000000"}
              />
            </TouchableOpacity>
            <Text style={styles.player}>{"Player"}</Text>
          </View>
          {currentVideo !== "" && (
            <YoutubeIframe height={230} play={paused} videoId={currentVideo} />
          )}
          <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const videoId = item?.snippet?.resourceId?.videoId;
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCurrentVideo(videoId);
                    addToRecentlyPlayed(videoId);
                  }}
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    marginBottom: 10,
                  }}
                >
                  <Image
                    source={{ uri: item?.snippet?.thumbnails?.medium?.url }}
                    style={{ width: "100%", height: 200 }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#111",
                    }}
                  >
                    {item?.snippet?.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </>
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
  },
  player: {
    color: "#111",
    fontSize: 16,
    marginLeft: 30,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
  },
});
