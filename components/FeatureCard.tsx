import { View, Text, Pressable, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";
import type { ComponentProps } from "react";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

type FeatureCardProps = {
  icon: IoniconsName;
  iconColor?: string;
  iconBgColor?: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

export function FeatureCard({
  icon,
  iconColor = Colors.text.dark,
  iconBgColor = Colors.background,
  title,
  subtitle,
  onPress,
}: FeatureCardProps) {
  const shadowStyle = Platform.select({
    web: {
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)",
    },
    default: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    },
  });

  return (
    <Pressable
      className="bg-white rounded-xl p-4 flex-1 min-h-[120px] active:opacity-80"
      style={shadowStyle}
      onPress={onPress}
      accessibilityRole="button"
    >
      {/* Icon */}
      <View
        className="w-10 h-10 rounded-lg items-center justify-center mb-3"
        style={{ backgroundColor: iconBgColor }}
      >
        <Ionicons name={icon} size={22} color={iconColor} />
      </View>

      {/* Content with Chevron */}
      <View className="flex-row items-end justify-between flex-1">
        <View className="flex-1">
          <Text
            className="text-base font-medium mb-0.5"
            style={{ color: Colors.text.dark }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            className="text-sm"
            style={{ color: Colors.text.gray }}
            numberOfLines={1}
          >
            {subtitle}
          </Text>
        </View>

        {/* Chevron */}
        <Ionicons name="chevron-forward" size={20} color={Colors.text.light} />
      </View>
    </Pressable>
  );
}

