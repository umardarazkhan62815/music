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
var emitter = require("tiny-emitter/instance");
import YoutubeIframe from "react-native-youtube-iframe";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import { back } from "../utils/images";
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const PlayerScreen = ({ route, navigation }) => {
  const video = route?.params.video;
  console.log("videoRoute", video);
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
      // console.log("Data", JSON.stringify(data?.items[0]));
      const filtteredData = data?.items.filter(
        (item) => item?.snippet?.title !== "Private video"
      );
      setCurrentVideo(filtteredData[0]?.snippet?.resourceId?.videoId);
      setVideos(filtteredData || []);
    } catch (error) {
      console.error("Error fetching YouTube playlist:", error);
    }
  };
  const hidePlayer = () => {
    navigation.goBack();
  };
  const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: ["fashion", "clothing"],
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        console.log("LOADED");
        setLoaded(true);
      }
    );

    const unsubscribeOpened = interstitial.addAdEventListener(
      AdEventType.OPENED,
      () => {
        console.log("OPENED");
      }
    );

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        console.log("CLOSED");
      }
    );

    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeOpened();
      unsubscribeClosed();
    };
  }, []);

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
          <YoutubeIframe height={300} play={paused} videoId={currentVideo} />
          <FlatList
            data={videos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const videoId = item?.snippet?.resourceId?.videoId;
              return (
                <TouchableOpacity
                  onPress={() => {
                    // interstitial.show();
                    setCurrentVideo(videoId);
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
