import { StyleSheet, Text, View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const ServiceDuration = () => {
  return (
    <View style={styles.serviceContainer}>
      <Text style={styles.serviceTitle}>Service Duration</Text>
      <EvilIcons name="clock" size={23} color="gray" />
      <Text style={styles.serviceDuration}>45 min</Text>
    </View>
  );
};

export default ServiceDuration;

const styles = StyleSheet.create({
  serviceContainer: {
    marginLeft: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  serviceTitle: { fontSize: 18, marginRight: 15, fontWeight: "400" },
  serviceDuration: { fontSize: 16, marginLeft: 3, fontWeight: "300" },
});
