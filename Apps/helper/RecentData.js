import AsyncStorage from "@react-native-async-storage/async-storage";

const RECENTLY_PLAYED_KEY = "recentlyPlayedVideos";

export const addToRecentlyPlayed = async (videoId) => {
  console.log("videoId added", videoId);
  try {
    const historyString = await AsyncStorage.getItem(RECENTLY_PLAYED_KEY);
    let history = historyString ? JSON.parse(historyString) : [];

    const existingIndex = history.findIndex((id) => id === videoId);

    if (existingIndex !== -1) {
      history.splice(existingIndex, 1);
      history.unshift(videoId);
    } else {
      history.unshift(videoId);

      if (history.length > 20) {
        history = history.slice(0, 20);
      }
    }

    await AsyncStorage.setItem(RECENTLY_PLAYED_KEY, JSON.stringify(history));
  } catch (error) {
    console.error("Error adding to recently played:", error);
  }
};

export const getRecentlyPlayed = async () => {
  try {
    const historyString = await AsyncStorage.getItem(RECENTLY_PLAYED_KEY);
    return historyString ? JSON.parse(historyString) : [];
  } catch (error) {
    console.error("Error getting recently played:", error);
    return [];
  }
};

export const clearRecentlyPlayed = async () => {
  try {
    await AsyncStorage.removeItem(RECENTLY_PLAYED_KEY);
  } catch (error) {
    console.error("Error clearing recently played:", error);
  }
};
