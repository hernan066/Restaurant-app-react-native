import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TopRestaurants from "../screens/TopRestaurants";

const Stack = createNativeStackNavigator();

export default function TopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={TopRestaurants}
        options={{ title: "Restaurantes Favoritos" }}
      />
    </Stack.Navigator>
  );
}