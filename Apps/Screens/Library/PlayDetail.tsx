import React = require("react");
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import Divider from "../../components/Divider";
import { songImage, back, more } from "../../utils/images";
import { data, mostPopulerData } from "../../utils/demoData";
import FeaturesListItem from "../../components/homeComponent/FeaturesListItem";
import PlayList from "../../components/PlaylistComponent";
import SongComponent from "../../components/SongComponent";
import StatusBarView from "../../components/StatusBarView";
import { black, white, grey } from "../../utils/colors";
import FastImage from "react-native-fast-image";
const PlayDetail = ({ navigation }) => {
  const isDarkTheme = false;
  return (
    <>
      <View
        style={[
          styles.container,
          { backgroundColor: isDarkTheme ? black : white },
        ]}
      >
        <StatusBarView
          backgroundColor={isDarkTheme ? black : white}
          barStyle={isDarkTheme ? "light-content" : "dark-content"}
        />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}
          >
            <FastImage
              source={back}
              style={[
                styles.backIcon,
                { tintColor: isDarkTheme ? white : black },
              ]}
            />
          </TouchableOpacity>
          {/* {playListData._id !== "FavoritesId" && ( */}
          <TouchableOpacity onPress={() => {}}>
            <FastImage
              source={more}
              style={[
                styles.moreIcon,
                { tintColor: isDarkTheme ? white : black },
              ]}
            />
          </TouchableOpacity>
          {/* )} */}
        </View>

        <View style={styles.mainImage}>
          <FastImage source={songImage} style={styles.image} />
          <Text
            style={[styles.nameText, { color: isDarkTheme ? white : black }]}
          >
            New Play List
          </Text>
          <Text
            style={[
              styles.artistNameText,
              { color: isDarkTheme ? white : black },
            ]}
          >
            Play list 178 songs
          </Text>
        </View>

        <View style={{ bottom: -160 }}>
          <Text
            style={[
              styles.headerTitleText,
              { color: isDarkTheme ? white : grey },
            ]}
          >
            Songs
          </Text>
          <FlatList
            data={mostPopulerData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <SongComponent
                isMore={true}
                songData={item}
                itemClicked={() => {
                  // if (playerSize === 1) {
                  //   dispatch(videoPlayerActions(-1));
                  // }
                  // setTimeout(() => {
                  //   dispatch(setSongDataAction(item));
                  //   dispatch(setSongListAction(playlistSong));
                  //   dispatch(videoPlayerActions(0));
                  // }, 200);
                }}
                favClicked={() => {
                  // return Alert.alert(
                  //   "Are you sure you want to delete this song?",
                  //   "",
                  //   [
                  //     {
                  //       text: "Delete",
                  //       onPress: () => {
                  //         setPlaylistSong((prevData) =>
                  //           prevData.filter((val) => val._id !== item._id)
                  //         );
                  //         setDeleteSong(item);
                  //       },
                  //     },
                  //     { text: "Cancel" },
                  //   ]
                  // );
                }}
              />
            )}
            contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
          />
        </View>
        {/* {showUpdatePlayListPopUp && (
          <TouchableWithoutFeedback
            onPress={() => {
              setShowUpdatePlayListPopUp(false);
            }}
          >
            {showUpdatePlayListPopUp && (
              <Modal visible={showUpdatePlayListPopUp} transparent>
                <UpdatePlaylistPopUp
                  hideMe={() => {
                    setShowUpdatePlayListPopUp(false);
                  }}
                  playListData={playListData}
                />
              </Modal>
            )}
          </TouchableWithoutFeedback>
        )} */}
      </View>
    </>
  );
};

export default PlayDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 60,
    marginLeft: 15,
  },
  subTitleText: {
    fontSize: 11,
    fontWeight: "500",
    marginTop: 6,
    marginLeft: 15,
    color: "grey",
  },
  divider: {
    height: 0.4,
    backgroundColor: "grey",
    marginTop: 20,
  },
  headerContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIcon: {
    tintColor: "#000000",
    alignSelf: "center",
    top: 10,
    left: 20,
    width: 20,
    height: 20,
  },
  moreIcon: {
    top: 10,
    right: 20,
    height: 18,
    width: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 200,
    borderRadius: 8,
    padding: 16,
  },
  option: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
  cancelOption: {
    paddingVertical: 8,
    marginTop: 8,
  },
  cancelOptionText: {
    fontSize: 16,
    fontWeight: "500",
    color: "red",
    textAlign: "center",
  },
  image: { width: 180, height: 180, borderRadius: 10 },
  featureView: { position: "absolute", bottom: -140 },
  nameText: {
    marginStart: 5,
    fontSize: 22,
    fontWeight: "700",
  },
  artistNameText: {
    marginStart: 5,
    fontSize: 12,
    fontWeight: "600",
  },
  mainImage: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    alignSelf: "center",
  },
});
