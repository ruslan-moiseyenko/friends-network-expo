import posts from "@Assets/data/posts.json";
import { FeedPost } from "@Components/FeedPost";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text } from "react-native";

const img = "@Assets/emptyAvatar.png";

export const FeedScreen = () => {
  const createPost = () => {
    console.warn("Post is created");
  };
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
});
