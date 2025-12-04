import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";

export function Header() {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      {/* Hamburger Menu */}
      <Pressable
        className="w-10 h-10 items-center justify-center"
        accessibilityLabel="Menu"
        onPress={() => router.push("/menu")}
      >
        <Ionicons name="menu" size={28} color={Colors.text.dark} />
      </Pressable>

      {/* Logo */}
      <View className="flex-row items-center gap-1">
        <MaterialCommunityIcons
          name="arrow-right-bold"
          size={24}
          color={Colors.primary.DEFAULT}
        />
        <Text className="text-base font-semibold" style={{ color: Colors.text.dark }}>
          Paso
        </Text>
        <Text
          className="text-base font-semibold"
          style={{ color: Colors.primary.DEFAULT }}
        >
          Rápido
        </Text>
      </View>

      {/* Notification Bell */}
      <Pressable
        className="w-10 h-10 items-center justify-center"
        accessibilityLabel="Notificaciones"
        onPress={() => {
          // TODO: Navigate to notifications
          console.log("Notifications pressed");
        }}
      >
        <Ionicons name="notifications-outline" size={26} color={Colors.text.dark} />
      </Pressable>
    </View>
  );
}

