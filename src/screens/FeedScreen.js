import posts from "@Assets/data/posts.json";
import { FeedPost } from "@Components/FeedPost";
import React from "react";
import { FlatList } from "react-native";

export const FeedScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
    />
  );
};
