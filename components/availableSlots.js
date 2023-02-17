import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { slots } from "../constants";

const AvaiableSlots = () => {
  const [availableSlots, setAvailableSlots] = useState(slots);
  const slotSelection = (key) => {
    const selectedSlot = availableSlots.map((item, index) => {
      if (index == key) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setAvailableSlots(selectedSlot);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Available slots</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {availableSlots.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => slotSelection(index)}
              key={index}
              style={[
                styles.bullet,
                {
                  backgroundColor: item.isSelected ? "#F34C7F" : "white",
                  borderColor: item.isSelected ? "#F34C7F" : "gray",
                },
                item.isSelected && styles.pinkShadow,
              ]}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: item.isSelected ? "white" : "black",
                  fontWeight: item.isSelected ? "500" : "300",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AvaiableSlots;

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  mainText: { fontSize: 24, marginBottom: 20, fontWeight: "400" },
  pinkShadow: {
    shadowColor: "#F34C7F",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.49,
    shadowRadius: 6.95,
    elevation: 12,
    borderRadius: 20,
  },
  bullet: {
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 25,
    borderWidth: 0.3,
    borderRadius: 20,
    marginRight: 10,
  },
});
