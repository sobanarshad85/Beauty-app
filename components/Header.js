import { Text, View, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" color={"#333333"} size={20} />
        <Text style={styles.headerText}>Hair</Text>
      </View>
      <View style={styles.headerDiv}>
        <Text style={styles.subText}>Blow dry</Text>
        <AntDesign
          name="left"
          color={"#333333"}
          size={18}
          style={{ paddingHorizontal: 3 }}
        />
        <Text style={styles.subText}>Progressive combing</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { marginLeft: 10, marginBottom: 20 },
  header: { flexDirection: "row", alignItems: "center" },
  headerText: {
    fontSize: 36,
    fontWeight: "500",
    color: "#333333",
    marginLeft: 10,
  },
  headerDiv: { flexDirection: "row", alignItems: "center", marginLeft: 23 },
  subText: { fontSize: 14, fontWeight: "300" },
});
