import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { profiles } from "../constants";
import ProfileMapping from "./profileMapping";

const ProfileListing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={25} color="gray" />
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>
        <View style={[styles.pinkShadow, styles.textAdjacent]}>
          <Entypo name="sound-mix" size={20} color="white" />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <ProfileMapping profiles={profiles} />
      </ScrollView>
    </View>
  );
};

export default ProfileListing;

const styles = StyleSheet.create({
  container: { marginTop: 30, flex: 1 },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchContainer: {
    height: 53,
    borderRadius: 70,
    borderWidth: 0.4,
    borderColor: "gray",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  scrollContainer: { marginTop: 15, flexGrow: 1 },
  textAdjacent: {
    padding: 17,
    backgroundColor: "#F34C7F",
    borderRadius: 70,
    marginLeft: 12,
  },
  pinkShadow: {
    shadowColor: "#F34C7F",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.8,
    shadowRadius: 9.65,
    elevation: 10,
    borderRadius: 20,
  },
  textInput: { marginLeft: 10, fontSize: 18, width: "87%" },
});
