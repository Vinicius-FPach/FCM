import { View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { Text } from "@rneui/base";

export default function details() {
  const { carrer, team, season } = useGlobalSearchParams();

  console.log(carrer, team, season);

  return (
    <View>
      <Text h2>Carrer Details</Text>
      <Text h4>Name: {carrer}</Text>
      <Text h4>Team: {team}</Text>
      <Text h4>Season: {season}</Text>
    </View>
  );
}
