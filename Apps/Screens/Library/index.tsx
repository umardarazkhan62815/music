import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import Divider from "../../components/Divider";
import { back } from "../../utils/images";
import { data, mostPopulerData } from "../../utils/demoData";
import FeaturesListItem from "../../components/homeComponent/FeaturesListItem";
import PlayList from "../../components/PlaylistComponent";
import FastImage from "react-native-fast-image";

const Library = ({ navigation }) => {
  const isDarkTheme = false;
  return (
    <View style={styles.container}>
      <HeaderComponent
        text="Library"
        isBack={false}
        onPressAdd={() => {}}
        navigation={undefined}
      />
      <Divider />
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
          <TouchableOpacity onPress={() => alert("test")}>
            <View style={styles.moreArrowContainer}>
              <Text style={[styles.moreText, { color: "#A1A1A1" }]}>More</Text>
              <FastImage
                source={back}
                style={styles.moreArrow}
                tintColor={"#A1A1A1"}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.listView}>
          {/* <FlatList
            horizontal
            data={data}
            renderItem={FeaturesListItem}
            showsHorizontalScrollIndicator={false}
          /> */}
        </View>
        <View style={styles.playListHeader}>
          <Text
            style={[
              styles.headingTitleText,
              { color: isDarkTheme ? "#FFFFFF" : "#000000" },
            ]}
          >
            Playlists
          </Text>
        </View>
        <View>
          <FlatList
            style={{ marginHorizontal: 18 }}
            data={mostPopulerData}
            renderItem={({ item }) => (
              <PlayList
                favList={item}
                showRadio={false}
                clickCallback={() => {
                  navigation.navigate("PlayDetail");
                }}
                onSelect={undefined}
              />
            )}
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
    marginStart: 10,
  },
});
