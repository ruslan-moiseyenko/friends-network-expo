import { RootNavigator } from "@Navigation/RootNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RootNavigator />
    </SafeAreaView>
  );
}
