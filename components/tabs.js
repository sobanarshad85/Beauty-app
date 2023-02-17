import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Tabs = ({ tab1, tab2, fontSize }) => {
  const [isFirstSelected, setIsFirstSelected] = useState(true);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setIsFirstSelected(true)}
          style={[
            isFirstSelected && styles.pinkShadow,
            {
              backgroundColor: isFirstSelected ? "#F34C7F" : "white",

              borderRadius: 20,
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: isFirstSelected ? "white" : "black",
                fontSize,
                fontWeight: isFirstSelected ? "500" : "300",
              },
            ]}
          >
            {tab1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFirstSelected(false)}
          style={[
            !isFirstSelected && styles.pinkShadow,
            {
              backgroundColor: !isFirstSelected ? "#F34C7F" : null,
              borderRadius: 20,
            },
          ]}
        >
          <Text
            style={[
              styles.text,
              {
                color: !isFirstSelected ? "white" : "black",
                fontSize,
                fontWeight: !isFirstSelected ? "500" : "300",
              },
            ]}
          >
            {tab2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  mainContainer: { alignItems: "center" },
  container: {
    padding: 4,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  pinkShadow: {
    shadowColor: "#F34C7F",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.69,
    shadowRadius: 6.65,
    elevation: 10,
    borderRadius: 20,
  },
  text: {
    paddingVertical: 9,
    paddingHorizontal: 22,
  },
});
