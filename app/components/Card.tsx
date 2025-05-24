import { View, Text } from "react-native";
import React, { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <View className="bg-gray-300 h-auto w-80 p-4 border-black rounded-xl m-2 self-center">
      <Text className="font-medium text-lg">{title}</Text>
      {children}
    </View>
  );
}
