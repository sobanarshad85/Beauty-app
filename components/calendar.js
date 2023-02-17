import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { calendar } from "../constants";

const Calendar = () => {
  const [days, setDays] = useState(calendar);
  const selectDay = (key) => {
    const selectedDay = days.map((item, index) => {
      if (index == key) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setDays(selectedDay);
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {days.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => selectDay(index)}
              key={index}
              style={[
                styles.bullet,
                { backgroundColor: item.isSelected ? "#F34C7F" : "white" },
                item.isSelected && styles.pinkShadow,
              ]}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: item.isSelected ? "500" : "300",
                  color: item.isSelected ? "white" : "black",
                }}
              >
                {item.date}
              </Text>
              <Text
                style={{
                  marginTop: item.isSelected ? 7 : 5,
                  fontSize: 16,
                  fontWeight: item.isSelected ? "500" : "300",
                  color: item.isSelected ? "white" : "black",
                }}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  mainContainer: { alignItems: "center", marginTop: 25 },
  bullet: {
    flexDirection: "column",
    marginHorizontal: 5,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 25,
    width: 52,
    borderRadius: 20,
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
});
