import { View } from "react-native";
import React from "react";
import useNavigationExitOnBack from "../../hooks/useNavigationExitOnBack";
import { Link } from "expo-router";
import { Text } from "@rneui/base";

import { data } from "../../mocks/data";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Scrollable from "../components/Scrollable";

export default function _screen() {
  useNavigationExitOnBack();
  return (
    <View>
      <Logo />
      <Text h1>Carrers</Text>
      <Scrollable>
        <Card title="My Carrers">
          {data.map((carrer, index) => (
            <Link
              key={index}
              href={{ pathname: "/(auth)/(home)/details", params: carrer }}
            >
              Details: {carrer.carrer}
            </Link>
          ))}
        </Card>
      </Scrollable>
    </View>
  );
}
