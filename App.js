import BeautyApp from "./BeautyApp";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <BeautyApp />
    </SafeAreaProvider>
  );
}
