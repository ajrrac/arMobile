import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/constants/colors";

type TabIconProps = {
  color: string;
  size: number;
};

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Math.max(insets.bottom, 8);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary.DEFAULT,
        tabBarInactiveTintColor: Colors.text.gray,
        tabBarStyle: {
          backgroundColor: Colors.card,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          height: Platform.OS === "web" ? 70 : 56 + bottomPadding,
          paddingTop: 8,
          paddingBottom: Platform.OS === "web" ? 12 : bottomPadding,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="peajes"
        options={{
          title: "Peajes",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <MaterialCommunityIcons name="road-variant" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vehiculos"
        options={{
          title: "Mis Vehículos",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ayuda"
        options={{
          title: "Ayuda",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <MaterialCommunityIcons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="asistencia"
        options={{
          title: "Asistencia Vial",
          tabBarIcon: ({ color, size }: TabIconProps) => (
            <MaterialCommunityIcons name="car-wrench" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

