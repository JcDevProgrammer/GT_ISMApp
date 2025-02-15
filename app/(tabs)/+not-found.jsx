// app/(tabs)/+not-found.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotFoundInTabs() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab route not found!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
