import { Pressable, Text } from "react-native";
import { Colors } from "@/constants/colors";

type PrimaryButtonProps = {
  title: string;
  onPress?: () => void;
};

export function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
  return (
    <Pressable
      className="mx-6 py-4 rounded-full items-center justify-center active:opacity-80"
      style={{ backgroundColor: Colors.primary.DEFAULT }}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Text className="text-white text-base font-semibold">{title}</Text>
    </Pressable>
  );
}

