import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Icon } from "@rneui/base";
import { useTheme } from "@rneui/themed";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function _layout() {
  const { theme } = useTheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="antdesign" name="home" color={theme.colors.primary} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon type="antdesign" name="user" color={theme.colors.primary} />
          ),
          title: "Profile",
        }}
      />
      <Tabs.Screen
        name="carrers"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome6 name="lines-leaning" size={24} color="black" />
          ),
          title: "Carrers",
        }}
      />
    </Tabs>
  );
}
