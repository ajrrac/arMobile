import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";

export default function PeajesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{
        backgroundColor: Colors.background,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text
        className="text-2xl font-semibold"
        style={{ color: Colors.text.dark }}
      >
        Peajes
      </Text>
      <Text
        className="text-base mt-2"
        style={{ color: Colors.text.gray }}
      >
        Próximamente
      </Text>
    </View>
  );
}

