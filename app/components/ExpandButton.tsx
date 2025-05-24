import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { ReactNode, useState } from "react";
import { useRouter } from "expo-router";

type ExpandCardProps = {
  title: string;
  team: string;
  season: number;
  goalspro: number;
  goalssuf: number;
  games: number;
};

export default function ExpandCard({
  title,
  team,
  season,
  goalspro,
  goalssuf,
  games,
}: ExpandCardProps) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const handleEdit = () => {
    router.push("../(auth)/edit");
  };
  return (
    <View>
      {expanded && (
        <View className="mb-2">
          <Text className="text-sm">{title}</Text>
          <View className="flex-row justify-between">
            <Text className="text-sm">{team}</Text>
            <Text className="text-sm">{season}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-sm">{goalspro}</Text>
            <Text className="text-sm">{goalssuf}</Text>
          </View>
          <Text className="text-sm">{games}</Text>
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
