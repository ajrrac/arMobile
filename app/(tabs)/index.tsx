import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "@/components/Header";
import { BalanceCard } from "@/components/BalanceCard";
import { PrimaryButton } from "@/components/PrimaryButton";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Colors } from "@/constants/colors";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ backgroundColor: Colors.background }}>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header />

        {/* Balance Card */}
        <BalanceCard
          userName="John Doe"
          balance={0}
          lastRecharge={0}
          lastPass={0}
        />

        {/* Recharge Button */}
        <PrimaryButton
          title="Recargar balance"
          onPress={() => {
            // TODO: Navigate to recharge screen
          }}
        />

        {/* Feature Grid */}
        <FeatureGrid />
      </ScrollView>
    </View>
  );
}

