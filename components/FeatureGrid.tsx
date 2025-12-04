import { View } from "react-native";
import { FeatureCard } from "./FeatureCard";
import { Colors } from "@/constants/colors";

export function FeatureGrid() {
  return (
    <View className="px-4 py-6">
      {/* First Row */}
      <View className="flex-row gap-3 mb-3">
        <FeatureCard
          icon="grid"
          iconColor={Colors.primary.DEFAULT}
          iconBgColor="#ECFDF5"
          title="Recargas recurrentes"
          subtitle="(0) Activo"
          onPress={() => {}}
        />
        <FeatureCard
          icon="people"
          iconColor={Colors.primary.DEFAULT}
          iconBgColor="#ECFDF5"
          title="Vinculados"
          subtitle="(0) Activo"
          onPress={() => {}}
        />
      </View>

      {/* Second Row */}
      <View className="flex-row gap-3">
        <FeatureCard
          icon="card"
          iconColor={Colors.primary.DEFAULT}
          iconBgColor="#ECFDF5"
          title="Métodos de pago"
          subtitle="**** **** 1234"
          onPress={() => {}}
        />
        <FeatureCard
          icon="time"
          iconColor={Colors.primary.DEFAULT}
          iconBgColor="#ECFDF5"
          title="Histórico"
          subtitle=""
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

