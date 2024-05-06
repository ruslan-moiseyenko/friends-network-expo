import { FeedScreen } from "@Screens/FeedScreen";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FeedScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
