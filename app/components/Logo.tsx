import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Logo() {
  return (
    <View className="m-4 items-center justify-center">
      <Text className="text-5xl font-semibold text-lime-500 m-4 stroke-black">
        FCM
      </Text>
      <MaterialCommunityIcons name="account-circle" size={50} color="black" />
    </View>
  );
}
