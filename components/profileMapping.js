import { Text, View, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const ProfileMapping = ({ profiles }) => {
  return profiles.map((profile, index) => {
    return (
      <View key={index} style={[styles.pinkShadow, styles.listing]}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={styles.image}
          />
          <View style={styles.listingContainer}>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>
              {profile.name}
            </Text>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {[...Array(4)].map((i, index) => {
                  return (
                    <Entypo key={index} name="star" size={17} color="#F34C7F" />
                  );
                })}
                <Text style={styles.ratingText}>4</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              {profile.rate}
            </Text>
          </View>
          {profile.isFavorite && (
            <View style={{ justifyContent: "center", marginLeft: 10 }}>
              <AntDesign name="heart" size={20} color="#F34C7F" />
            </View>
          )}
        </View>
      </View>
    );
  });
};

export default ProfileMapping;

const styles = StyleSheet.create({
  pinkShadow: {
    shadowColor: "#68000026",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1.99,
    shadowRadius: 9.65,
    elevation: 14,
    borderRadius: 20,
  },
  listing: {
    marginHorizontal: 7,
    marginVertical: 5,
    padding: 15,
    flexDirection: "row",
    backgroundColor: "white",
  },
  listingContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
    marginLeft: 10,
  },
  ratingText: {
    color: "#F34C7F",
    fontSize: 17,
    fontWeight: "300",
    marginLeft: 5,
  },
  line: {
    height: 0.5,
    backgroundColor: "#F34C7F",
    width: 67,
  },
  image: { height: 59.48, width: 59.48, borderRadius: 14 },
});
