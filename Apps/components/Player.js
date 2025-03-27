import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Player = ({ route }) => {
  const videoId = route.params.video;
  return (
    <View>
      <Text>Player</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({});
