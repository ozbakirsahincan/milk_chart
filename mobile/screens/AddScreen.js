// screens/AddScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buraya ekleme formu gelecek</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default AddScreen;
