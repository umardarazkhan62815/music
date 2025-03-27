import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Library from "../Screens/Library";
import More from "../Screens/More";
import { home, list, more } from "../utils/images";
import FastImage from "react-native-fast-image";
import HomeStackNavigator from "./HomeStackNavigator";
import { StyleSheet, View } from "react-native";
import PlayerScreen from "../Auth/PlayerScreen";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Home from "../Screens/Home";
import BottomSheet from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";
var emitter = require("tiny-emitter/instance");

const Tab = createBottomTabNavigator();

const MyTabBarFN = (props) => {
  let [isOpen, setIsOpen] = React.useState(false);
  let [videos, setVideos] = React.useState(null);

  let bottomSheet = React.useRef(null);
  const sharedValue = useSharedValue(-1);
  const insets = useSafeAreaInsets();
  const tabBarHeight = 100;
  const theme = { mode: "light" };
  let [isFullscreen, setIsFullscreen] = React.useState(false);

  let smallPlayerHieght = 54; // the height of small player
  let [tabAndsmallPlayerHieght, setTabAndsmallPlayerHieght] = React.useState(
    tabBarHeight + smallPlayerHieght
  );

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            sharedValue.value,
            [0, 0, 1],
            [0, 0, tabBarHeight]
          ),
        },
      ],
    };
  });

  emitter.on("toggle-fullscreen", (isFull) => {
    setIsFullscreen(isFull);
  });

  emitter.on("open-player", (data) => {
    setVideos(data);
    onPlayerOpened();
  });

  emitter.on("close-player", () => {
    onPlayerClosed();
  });

  emitter.on("hide-player", () => {
    if (bottomSheet.current) {
      bottomSheet.current.close();
    }
  });

  function onPlayerOpened() {
    if (bottomSheet.current) {
      bottomSheet.current.snapToIndex(1);
    }
    setIsOpen(true);
  }
  function onPlayerClosed() {
    if (bottomSheet.current) {
      bottomSheet.current.snapToIndex(0);
    }
    setIsOpen(false);
  }

  function stopPlayer() {}

  function onChange(index) {
    if (index == 1) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  // let smallPlayerHieght = height / 100 * 7; // the height of small player

  const snapPoints = React.useMemo(
    () => [tabAndsmallPlayerHieght, "99.99999%"],
    []
  );

  return (
    <>
      <Animated.View
        style={[
          {
            zIndex: 33,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            // backgroundColor: 'transparent',
          },
          animatedStyles,
        ]}
      >
        <BottomTabBar {...props} />
      </Animated.View>
      {/* <BottomSheet
        style={{ zIndex: !isOpen ? 0 : 33 }}
        backgroundStyle={{
          backgroundColor: "#FFFFFF",

          shadowOpacity: theme.mode == "dark" ? 0.1 : 0.1,
          shadowRadius: theme.mode == "dark" ? 10 : 8,
        }}
        ref={bottomSheet}
        index={-1}
        topInset={isFullscreen ? 0 : insets.top}
        handleComponent={null}
        snapPoints={snapPoints}
        animatedIndex={sharedValue}
        onChange={onChange}
        enableContentPanningGesture={!isFullscreen}
      >
        <View
          style={{ flex: 1, paddingBottom: isFullscreen ? 0 : insets.bottom }}
        >
          <PlayerScreen
            openPlayer={onPlayerOpened}
            isOpen={isOpen}
            playerAnimationSharedValue={sharedValue}
            video={videos}
          />
        </View>
      </BottomSheet> */}
    </>
  );
};

function TabNavigator() {
  function renderBottomTabs(props) {
    return <MyTabBarFN {...props} />;
  }
  return (
    <Tab.Navigator
      tabBar={renderBottomTabs}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            color = focused ? "#F85D2C" : "#8A8A8A";
            return (
              <FastImage
                source={home}
                style={styles.tabIcon}
                tintColor={color}
              />
            );
          }
          if (route.name === "Library") {
            color = focused ? "#F85D2C" : "#8A8A8A";
            return (
              <FastImage
                source={list}
                style={styles.tabIcon}
                tintColor={color}
              />
            );
          }
          if (route.name === "More") {
            color = focused ? "#F85D2C" : "#8A8A8A";
            return (
              <FastImage
                source={more}
                style={styles.tabIcon}
                tintColor={color}
              />
            );
          }
        },
        tabBarActiveTintColor: "#F85D2C",
        tabBarInactiveTintColor: "#8A8A8A",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});
