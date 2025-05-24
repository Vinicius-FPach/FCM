import { View, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { Text } from "@rneui/base";
import useNavigationExitOnBack from "../../../hooks/useNavigationExitOnBack";
import { Link } from "expo-router";

import { data } from "../../../mocks/data";
import Logo from "../../components/Logo";
import Card from "../../components/Card";

export default function _screen() {
  useNavigationExitOnBack();

  const item = data[0];
  return (
    <View style={styles.container}>
      <Logo />
      <Text className="text-4xl font-semibold text-left">Last Accesed</Text>
      <Card title="Last Carrer">
        <Link href={{ pathname: "/(auth)/(home)/details", params: item }}>
          Details: {item.carrer}
        </Link>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: Constants.statusBarHeight,
  },
});
