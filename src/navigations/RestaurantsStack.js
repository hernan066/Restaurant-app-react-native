import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "../screens/Restaurants";

const Stack = createNativeStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="restaurant"
        component={Restaurants}
         options={{ title: "Restaurantes" }} 
         
      />
    </Stack.Navigator>
  );
}