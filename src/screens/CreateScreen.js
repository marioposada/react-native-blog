import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        value={title}
        onChangeText={(newTitle) => setTitle(newTitle)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
        style={styles.input}
      />
      <TouchableOpacity>
        <Text>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    margin: 5,
    padding: 5,
    fontSize: 18,
    width: 300,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default CreateScreen;
