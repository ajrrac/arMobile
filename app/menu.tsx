import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";

type MenuItemProps = {
  title: string;
  onPress: () => void;
  showBorder?: boolean;
};

function MenuItem({ title, onPress, showBorder = true }: MenuItemProps) {
  return (
    <Pressable
      className="flex-row items-center justify-between px-5 py-5 active:bg-gray-50"
      style={{
        borderBottomWidth: showBorder ? 1 : 0,
        borderBottomColor: Colors.border,
      }}
      onPress={onPress}
    >
      <Text className="text-base" style={{ color: Colors.text.dark }}>
        {title}
      </Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.text.light} />
    </Pressable>
  );
}

export default function MenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const menuItems = [
    { title: "Perfil", route: "/menu" },
    { title: "Contraseña", route: "/menu" },
    { title: "Métodos de pago", route: "/menu" },
    { title: "Vinculados", route: "/menu" },
    { title: "Reclamaciones", route: "/menu" },
    { title: "Noticias", route: "/menu" },
    { title: "Notificaciones", route: "/menu" },
  ];

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout pressed");
  };

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b" style={{ borderBottomColor: Colors.border }}>
        <Pressable
          className="w-10 h-10 items-center justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="menu" size={28} color={Colors.text.dark} />
        </Pressable>
        <Text
          className="flex-1 text-center text-lg font-semibold mr-10"
          style={{ color: Colors.text.dark }}
        >
          Menú
        </Text>
      </View>

      {/* Menu Items */}
      <ScrollView className="flex-1">
        <View className="mt-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.title}
              title={item.title}
              onPress={() => {
                // TODO: Navigate to specific screens
                console.log(`Navigate to ${item.title}`);
              }}
              showBorder={index < menuItems.length - 1}
            />
          ))}
        </View>

        {/* Logout Button */}
        <View className="mt-4 border-t" style={{ borderTopColor: Colors.border }}>
          <Pressable
            className="px-5 py-5 active:bg-gray-50"
            onPress={handleLogout}
          >
            <Text className="text-base" style={{ color: Colors.text.dark }}>
              Cerrar sesión
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

