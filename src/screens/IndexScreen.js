import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text>{item.title} {item.id}</Text>
              <FontAwesome name="trash-o" size={24} color="black" />

            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  
});

export default IndexScreen;
