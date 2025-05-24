import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { ReactNode, useState } from "react";
import { useRouter } from "expo-router";

type ExpandCardProps = {
  children: ReactNode;
};

export default function ExpandCard({ children }: ExpandCardProps) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const handleEdit = () => {
    router.push("../(auth)/edit");
  };
  return (
    <View>
      {expanded && (
        <View className="mb-2">
          <Text className="text-sm">{children}</Text>
          <View className="flex-row justify-between">
            <Text className="text-sm">{children}</Text>
            <Text className="text-sm">{children}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-sm">Goals P: 45</Text>
            <Text className="text-sm">Goals S: 75</Text>
          </View>
          <Text className="text-sm">Games: 40</Text>
        </View>
      )}

      <Pressable
        onPress={() => setExpanded(!expanded)}
        className="bg-green-400 px-3 py-1 rounded-full self-end"
      >
        <Text> {expanded ? "Details -" : "Details +"}</Text>
      </Pressable>

      {expanded && (
        <View className="flex-row justify-between mt-3">
          <TouchableOpacity
            onPress={handleEdit}
            className="bg-blue-400 px-4 py-1 rounded-full"
          >
            <Text className="text-white font-semibold">Edit</Text>
          </TouchableOpacity>
          <Pressable className="bg-green-400 px-4 py-1 rounded-full">
            <Text className="text-white font-semibold">Put on Profile</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
