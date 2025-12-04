import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/colors";

type BalanceCardProps = {
  userName: string;
  balance: number;
  lastRecharge: number;
  lastPass: number;
};

export function BalanceCard({
  userName,
  balance,
  lastRecharge,
  lastPass,
}: BalanceCardProps) {
  const formatCurrency = (amount: number) => {
    const prefix = amount < 0 ? "-" : "";
    const absAmount = Math.abs(amount).toFixed(2);
    return `RD$${prefix}${absAmount.replace("-", "")}`;
  };

  return (
    <View className="px-6 pt-4 pb-2">
      {/* Welcome Greeting */}
      <Text
        className="text-2xl font-semibold text-center mb-6"
        style={{ color: Colors.text.dark }}
      >
        ¡Bienvenido, {userName}!
      </Text>

      {/* Balance Display */}
      <Text
        className="text-4xl font-bold text-center"
        style={{ color: Colors.primary.DEFAULT }}
      >
        RD${balance.toFixed(2)}
      </Text>

      {/* Balance Label with Info Icon */}
      <View className="flex-row items-center justify-center gap-1 mt-1">
        <Ionicons
          name="information-circle-outline"
          size={16}
          color={Colors.text.gray}
        />
        <Text className="text-sm" style={{ color: Colors.text.gray }}>
          Balance
        </Text>
      </View>

      {/* Subtitle */}
      <Text
        className="text-xs text-center mt-1 mb-6"
        style={{ color: Colors.text.light }}
      >
        Este es el balance total entre sus vehículos
      </Text>

      {/* Last Recharge and Last Pass Row */}
      <View className="flex-row justify-between px-4 mb-4">
        {/* Last Recharge */}
        <View className="items-center flex-1">
          <Text
            className="text-lg font-semibold"
            style={{ color: Colors.primary.DEFAULT }}
          >
            {formatCurrency(lastRecharge)}
          </Text>
          <Text className="text-sm" style={{ color: Colors.text.gray }}>
            Última recarga
          </Text>
        </View>

        {/* Last Pass */}
        <View className="items-center flex-1">
          <Text
            className="text-lg font-semibold"
            style={{ color: Colors.danger }}
          >
            {formatCurrency(lastPass)}
          </Text>
          <Text className="text-sm" style={{ color: Colors.text.gray }}>
            Último pase
          </Text>
        </View>
      </View>
    </View>
  );
}

