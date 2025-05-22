import { View, Text } from "react-native";
import React, { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <View className="bg-gray-400 h-20 w-3/4 border-black rounded-lg">
      <Text>{title}</Text>
      {children}
    </View>
  );
}
