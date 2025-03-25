import React, { useState } from "react";
import {
  Linking,
  ScrollView,
  Share,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import Divider from "../../components/Divider";

const More = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  const isDarkTheme = false;
  const [darkMode, setDarkMode] = useState(isDarkTheme);

  const togggleNotification = async () => {};

  const togggleMode = async () => {};

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Hi, I recomment this app.",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {}
  };
  const handleEmailClick = async () => {};
  return (
    <View style={styles.container}>
      <HeaderComponent text="More" isBack={false} />
      <Divider />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView}>
          <TouchableOpacity
            style={styles.premiumContainer}
            onPress={() => {
              // dispatch(moreScreenActions(true));
              // navigation.navigate("ProScreen");
            }}
          >
            <View style={styles.textContainer}>
              <Text style={[styles.premimumText]}>Go Premium</Text>
            </View>
            <View style={styles.removeAdds}>
              <Text style={styles.removeAddsText}>REMOVE ALL ADS</Text>
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.subContainer,
              { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
            ]}
          >
            <View
              style={[
                styles.listContent,
                { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
              ]}
            >
              <View>
                <Text
                  style={[
                    styles.listTexts,
                    { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                  ]}
                >
                  Notifications
                </Text>
              </View>
              <View>
                <Switch
                  trackColor={{ false: "#FFFFFF", true: "#F24949" }}
                  thumbColor={isNotificationEnabled ? "#FFFFFF" : "#FFFFFF"}
                  ios_backgroundColor="#FFFFFF"
                  onValueChange={togggleNotification}
                  value={isNotificationEnabled}
                />
              </View>
            </View>
            <View style={styles.listDivider} />
            <View style={styles.listContent}>
              <Text
                style={[
                  styles.listTexts,
                  { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                ]}
              >
                Dark Mode
              </Text>
              <Switch
                trackColor={{ false: "#FFFFFF", true: "#F85D2C" }}
                thumbColor={darkMode ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={togggleMode}
                value={darkMode}
              />
            </View>
          </View>
          <View style={styles.headings}>
            <Text style={styles.headingText}>History</Text>
          </View>
          <View
            style={[
              styles.subContainer,
              { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
            ]}
          >
            <View>
              <TouchableOpacity
                style={styles.listContent}
                onPress={() => {
                  // romoveSearchHistory();
                  // romoveRecentlyPlayedSongs();
                  // romovePlaylist();
                }}
              >
                <Text style={styles.historyText}>Clear History</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headings}>
            <Text style={styles.headingText}>Other</Text>
          </View>
          <View
            style={[
              styles.subContainer,
              { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
            ]}
          >
            <TouchableOpacity
              style={styles.listContent}
              onPress={() => {
                Linking.openURL("https://www.google.com/");
              }}
            >
              <Text
                style={[
                  styles.listTexts,
                  { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                ]}
              >
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <View style={styles.listDivider} />
            <TouchableOpacity
              style={[
                styles.listContent,
                { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
              ]}
              onPress={handleEmailClick}
            >
              <Text
                style={[
                  styles.listTexts,
                  { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                ]}
              >
                Support Contact
              </Text>
            </TouchableOpacity>
            <View style={styles.listDivider} />
            <TouchableOpacity
              style={[
                styles.listContent,
                { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
              ]}
              onPress={onShare}
            >
              <Text
                style={[
                  styles.listTexts,
                  { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                ]}
              >
                Share us
              </Text>
            </TouchableOpacity>
            <View style={styles.listDivider} />
            <TouchableOpacity
              style={[
                styles.listContent,
                { backgroundColor: isDarkTheme ? "#272727" : "#FFFFFF" },
              ]}
              onPress={() => {
                // rate();
              }}
            >
              <Text
                style={[
                  styles.listTexts,
                  { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                ]}
              >
                Rate App
              </Text>
            </TouchableOpacity>
            <View style={styles.listDivider} />
            <TouchableOpacity style={styles.listContent}>
              <Text
                style={[
                  styles.listTexts,
                  { color: isDarkTheme ? "#FFFFFF" : "#000000" },
                ]}
              >
                Developer’s Apps
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headings}>
            <Text style={styles.headings}>Version 1.0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default More;

const styles = StyleSheet.create({
  container: { flex: 1 },
  premiumContainer: {
    backgroundColor: "#F85D2C",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  premimumText: {
    fontWeight: "700",
    fontSize: 24,
    color: "#FFFFFF",
    padding: 2,
  },
  remiveAdsText: {
    color: "#FFFFFF",
    fontSize: 14,
    padding: 2,
  },
  textContainer: {
    justifyContent: "space-between",
  },
  removeAdds: {
    backgroundColor: "#FFFFFF",
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  scrollView: {
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 30,
  },
  removeAddsText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#111",
  },
  listTexts: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  listContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: "",
  },
  subContainer: {
    width: "100%",
    marginVertical: 20,
    borderRadius: 12,
  },
  headings: {
    display: "flex",
    justifyContent: "flex-start",
    width: "90%",
  },
  headingText: {
    color: "#888888",
  },
  listContainer: {
    width: "90%",
  },
  historyText: {
    color: "#F24949",
    fontWeight: "500",
  },
  listDivider: {
    height: 0.5,
    backgroundColor: "#EDEDED",
    borderStyle: "solid",
  },
});
