import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import AntDesign from "react-native-vector-icons/AntDesign";
import { data } from "../../utils/demoData";
import { playBtn, search, songBgImage } from "../../utils/images";
import FeaturesListItem from "../../components/homeComponent/FeaturesListItem";
import SongComponent from "../../components/SongComponent";
import FastImage from "react-native-fast-image";
import { getYoutubeMeta } from "react-native-youtube-iframe";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

var emitter = require("tiny-emitter/instance");
const Home = ({ navigation }) => {
  const isDarkTheme = false;
  const [youtubeMeta, setYoutubeMeta] = useState(null);

  useEffect(() => {
    getYoutubeMeta("otbSVGrzls8")
      .then((meta) => {
        setYoutubeMeta(meta);
      })
      .catch((error) => console.log("Error fetching YouTube meta:", error));
  }, []);

  const renderItem = useCallback(({ item }) => {
    return (
      <View>
        <SongComponent
          songData={item[0]}
          isMore={false}
          itemClicked={() => {}}
        />
        <SongComponent
          songData={item[1]}
          isMore={false}
          itemClicked={() => {}}
        />
      </View>
    );
  }, []);
  const keyExtractor = useCallback((item, index) => {
    return index;
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#000000" : "#FFFFFF" },
      ]}
    >
      <HeaderComponent text="Home" />
      <Text
        style={[
          styles.headingTitleText,
          { color: isDarkTheme ? "#FFFFFF" : "#000000" },
        ]}
      >
        All Videos
      </Text>
      {/* <View style={{ height: "30%" }}>
        <ImageBackground
          source={{ uri: youtubeMeta?.thumbnail_url }}
          style={styles.bgImage}
        >
          <View style={styles.bgContent}>
            <TouchableOpacity
              style={styles.playView}
              onPress={() => {
                navigation.navigate("PlayerScreen", {
                  video: "PLbgSlMnIzZYdAHp7kyB10x_RuoFT7AHG7",
                });
              }}
            >
              <FastImage
                source={playBtn}
                tintColor={"tomato"}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
            <View style={{}}>
              <Text style={styles.songNameText} numberOfLines={1}>
                {youtubeMeta?.title}
              </Text>
              <Text style={styles.artistNameText}>
                {youtubeMeta?.author_name}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View> */}
      <BannerAd
        unitId={"ca-app-pub-3940256099942544/9214589741"}
        size={BannerAdSize.BANNER}
        onAdFailedToLoad={(error) => console.error("Ad failed to load", error)}
        onAdLoaded={(onLoad) => console.log("onAdd Loaded", onLoad)}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <FeaturesListItem item={item} />}
        showsHorizontalScrollIndicator={false}
      />

      {/* <TouchableOpacity
        style={[
          styles.genresContainer,
          {
            borderColor: isDarkTheme ? "#3C3C3C" : "#DFDFDF",
          },
        ]}
        onPress={() => {
          navigation.navigate("AllGeneres");
        }}
      >
        <Text
          style={[
            styles.genresHeading,
            { color: isDarkTheme ? "white" : "black" },
          ]}
        >
          Generes
        </Text>
        <TouchableOpacity>
          <FastImage
            source={back}
            style={[
              styles.arrowIcon,
              { tintColor: isDarkTheme ? "white" : "black" },
            ]}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.mostPopulerView}>
        <Text
          style={[
            styles.headingTitleText,
            { color: isDarkTheme ? "white" : "black" },
          ]}
        >
          Most Populer
        </Text>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("MostPopularMoreScreen");
          }}
        >
          <View style={styles.moreArrowContainer}>
            <Text style={styles.moreText}>MORE</Text>
            <FastImage
              source={back}
              style={styles.moreArrow}
              tintColor={"#A1A1A1"}
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mostPopulerData}
        // horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <SongComponent
            songData={item}
            isMore={false}
            itemClicked={() => {}}
          />
        )}
      /> */}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  searchBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    marginVertical: 15,
    gap: 7,
    paddingStart: 10,
  },
  bgImage: { width: "100%", height: 210, opacity: 0.9, resizeMode: "contain" },
  bgContent: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: 10,
    alignItems: "center",
    gap: 10,
  },
  featureView: {
    position: "absolute",
    top: 200,
  },
  songNameText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#FFFFFF",
  },
  artistNameText: { fontWeight: "700", fontSize: 16, color: "#FFFFFF" },
  playView: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: 33.3,
    height: 33.3,
    borderRadius: 25,
  },
  arrowIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  genresHeading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
  },
  genresContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 55,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  mostPopulerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 20,
  },
  moreArrowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  moreText: {
    color: "#A1A1A1",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 12,
  },
  moreArrow: {
    width: 14,
    height: 14,
    marginStart: 3,
    resizeMode: "contain",
    transform: [{ rotate: "180deg" }],
  },
  headingTitleText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    marginLeft: 16,
  },
});
