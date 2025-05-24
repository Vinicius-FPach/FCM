import { View } from "react-native";
import React from "react";
import useNavigationExitOnBack from "../../hooks/useNavigationExitOnBack";
import { Link } from "expo-router";
import { Text } from "@rneui/base";

import { data } from "../../mocks/data";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Scrollable from "../components/Scrollable";
import ExpandCard from "../components/ExpandButton";

export default function _screen() {
  useNavigationExitOnBack();
  return (
    <View>
      <Logo />
      <Text h1>Carrers</Text>
      <Scrollable>
        <Card title={data[0].carrer}>
          <ExpandCard
            title={data[0].carrer}
            team={data[0].carrer}
            season={data[0].season}
            goalspro={data[0].season}
            goalssuf={data[0].season}
            games={data[0].season}
          />
        </Card>
        <Card title={data[1].carrer}>
          <ExpandCard
            title={data[1].carrer}
            team={data[1].carrer}
            season={data[1].season}
            goalspro={data[1].season}
            goalssuf={data[1].season}
            games={data[1].season}
          />
        </Card>
      </Scrollable>
    </View>
  );
}

/**
 * 
{data.map((carrer, index) => (
 <Link
   key={index}
   href={{ pathname: "/(auth)/(home)/details", params: carrer }}
 >
   1°Carrer: {carrer.carrer}
 </Link>
))}
*/
