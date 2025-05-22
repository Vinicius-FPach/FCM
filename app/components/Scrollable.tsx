import { Text, ScrollView } from "react-native";
import React, { ReactNode } from "react";

type ScrollableProps = {
  children: ReactNode;
};

export default function Scrollable({ children }: ScrollableProps) {
  return (
    <ScrollView>
      <Text>Children</Text>
    </ScrollView>
  );
}
