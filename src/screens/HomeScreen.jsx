import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { useRouter } from "expo-router"; // For navigation with Expo Router
import IconButton from "../../components/ui/IconButton";

const HomeScreen = () => {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/icons/printer.png")}
          style={styles.headerIcon}
        />

        {/* Search Bar */}
        <TextInput style={styles.searchBar} placeholder="Enter model name..." />

        <Image
          source={require("../../assets/icons/info.png")}
          style={styles.headerIcon}
        />
      </View>

      {/* Menu Items with Navigation */}
      <IconButton
        icon={require("../../assets/icons/search.png")}
        label="Search Error Code"
        onPress={() => console.log("Search Error Code pressed")}
      />
      <IconButton
        icon={require("../../assets/icons/manual.png")}
        label="User's Manual"
        onPress={() => router.push("/user-manual")} // Navigates to User Manual
      />
      <IconButton
        icon={require("../../assets/icons/video.png")}
        label="Video Manual for GT"
        onPress={() => router.push("/video-manual")} // Navigates to Video Manual
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#283593",
    paddingTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 10,
    fontSize: 14,
    width: "70%",
    alignSelf: "center",
  },
});

export default HomeScreen;
