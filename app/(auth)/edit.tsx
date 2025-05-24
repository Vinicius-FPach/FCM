import { View, Text } from "react-native";
import React from "react";
import { data } from "../../mocks/data";
import Logo from "../components/Logo";
import Card from "../components/Card";
import { Input } from "@rneui/base";

export default function edit() {
  const item = data[1];

  return (
    <View>
      <Logo />
      <Card title="Edit Carrer">
        <Input placeholder={item.carrer} />
        <Input placeholder={item.team} />
      </Card>
    </View>
  );
}
