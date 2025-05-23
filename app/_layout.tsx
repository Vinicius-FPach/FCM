import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";

import "../global.css";

export default function _layout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ title: "Create Account" }} />
      </Stack>
    </ThemeProvider>
  );
}
