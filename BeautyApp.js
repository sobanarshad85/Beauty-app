import { ScrollView, StyleSheet, Text, View } from "react-native";
import Tabs from "./components/tabs";
import Calendar from "./components/calendar";
import ProfileListing from "./components/profileListing";
import AvailableSlots from "./components/availableSlots";
import Header from "./components/Header";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ServiceDuration from "./components/serviceDuration";

export default function BeautyApp() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Tabs tab1={"Days"} tab2={"Month"} fontSize={18} />
        <Calendar />
        <AvailableSlots />
        <ServiceDuration />
        <Tabs
          tab1={"Choose your beautician"}
          tab2={"Choose for me"}
          fontSize={16}
        />
        <ProfileListing />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
