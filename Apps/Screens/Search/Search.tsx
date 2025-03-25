import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { close, back, clock, search } from "../../utils/images";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TextInput } from "react-native";
import Divider from "../../components/Divider";
import FastImage from "react-native-fast-image";

const SearchScreen = ({ navigation }) => {
  const isDarkTheme = false;
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
  };

  const historyData = [
    { name: "Justin Bieber" },
    { name: "Justin Timberlake" },
    { name: "Taylor Swift" },
    { name: "Adele" },
    { name: "Ed Sheeran" },
  ];

  const filteredData = historyData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={styles.itemMainContainr}>
        <View style={styles.itemSubContainr}>
          {searchText == "" && (
            <FastImage
              style={styles.watchIcon}
              tintColor={isDarkTheme ? "#ffffff" : "black"}
              source={clock}
            />
          )}
          <Text
            style={[
              styles.artistName,
              { color: isDarkTheme ? "#ffffff" : "black" },
            ]}
          >
            {item.item.name}
          </Text>
        </View>
        {searchText == "" ? (
          <TouchableOpacity
            onPress={() => {
              setSearchText("");
            }}
          >
            <FastImage
              source={close}
              tintColor={isDarkTheme ? "#ffffff" : "black"}
              style={styles.close}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => {}}>
            <FastImage
              source={back}
              tintColor={isDarkTheme ? "#ffffff" : "black"}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={styles.backIconContainer}
        >
          <FastImage
            source={back}
            style={styles.backIcon}
            tintColor={isDarkTheme ? "#ffffff" : "black"}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitleText}>Search</Text>
      </View>

      <View>
        <View
          style={[
            styles.searchBox,
            {
              backgroundColor: isDarkTheme ? "#B5B5C91F" : "#7676801F",
            },
          ]}
        >
          <FastImage
            source={search}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
          <TextInput
            value={searchText}
            onChangeText={handleSearch}
            placeholder="Search"
            style={[{ color: isDarkTheme ? "#fff" : "black" }]}
          />
          <View style={styles.clearSearchIconContainer}>
            {searchText !== "" && (
              <TouchableOpacity
                onPress={() => {
                  setSearchText("");
                }}
                style={styles.clearSearchIcon}
              >
                {isDarkTheme ? (
                  <FastImage source={close} style={{ width: 20, height: 20 }} />
                ) : (
                  <FastImage source={close} style={{ width: 20, height: 20 }} />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View
        style={[
          styles.dividerMain,
          {
            backgroundColor: isDarkTheme
              ? "rgba(255, 255, 255, 0.15)"
              : "rgba(0, 0, 0, 0.15)",
          },
        ]}
      />

      <FlatList data={filteredData} renderItem={renderItem} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 70,
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000000",
    alignSelf: "center",
    // fontFamily: Euclid_Circular_B,
  },
  divider: {
    height: 2,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginVertical: 5,
    borderStyle: "solid",
  },
  dividerMain: {
    height: 0.5,
    marginTop: 4,
    marginBottom: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    marginVertical: 15,
    gap: 7,
    paddingStart: 10,
    position: "relative",
  },
  clearSearchIconContainer: {
    position: "absolute",
    right: 10,
    backgroundColor: "#7676801F",
  },

  searchBar: {
    backgroundColor: "#434343",
    width: "100%",
    height: 48,
    borderRadius: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  borderLine: {
    bordeWidth: 1,
    marginVertical: 5,
    borderColor: "#D3D3D3",

    borderRadius: 10,
  },
  searchIcon: {
    tintColor: "#FFFFFF",
    marginStart: 3,
    width: 18,
    height: 18,
    opacity: 0.5,
  },
  searchText: {
    color: "#FFFFFF",
    fontWeight: "400",
    // fontFamily: Euclid_Circular_B,
    fontSize: 16,
    width: "78%",
  },

  subSearchBar: {
    alignItems: "center",
    flexDirection: "row",
    gap: 13,
    marginLeft: 10,
  },
  clearSearchIcon: {
    // marginLeft: 8,
    backgroundColor: "#7676801F",
    borderRadius: 100,
    tintColor: "grey",
  },
  watchIcon: {
    tintColor: "black",
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  itemContainr: {
    marginStart: 10,
    maxWidth: "60%",
  },
  itemTitelText: {
    color: "balck",
    fontSize: 14,
    fontWeight: "500",
    // fontFamily: Euclid_Circular_B,
  },
  itemDescriptionText: {
    color: "#918a8a",
    fontSize: 12,
    marginTop: 5,
    textTransform: "uppercase",
    fontWeight: "500",
    // fontFamily: Euclid_Circular_B,
  },
  itemMainContainr: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    marginVertical: 5,
    borderColor: "#D3D3D3",
    marginHorizontal: 10,
    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  crossContainr: {
    alignItems: "center",
    width: 12,
    height: 12,
  },
  crossIcon: {
    tintColor: "grey",
  },
  timeText: {
    tintColor: "grey",
    width: 20,
    height: 20,
    fontWeight: "400",
    fontSize: 11,
    // fontFamily: Euclid_Circular_B,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginStart: 10,
    flex: 1,
  },
  itemImageHolder: {
    width: 48,
    height: 48,
    marginBottom: 5,
  },
  cancelIcon: {
    marginRight: 10,
  },
  headerConatiner: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "600",
    // fontFamily: Euclid_Circular_B,
    fontSize: 16,
  },
  artistName: {
    color: "#000000",
    fontWeight: "500",
    // fontFamily: Euclid_Circular_B,
    fontSize: 16,
  },
  itemSubContainr: {
    flexDirection: "row",
    gap: 10,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    tintColor: "#000000",
    width: 22,
    height: 22,
  },
  close: {
    tintColor: "#000000",
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  backIconContainer: {
    position: "absolute",
    left: 10,
  },
});
// const font = "Euclid Circular B";
