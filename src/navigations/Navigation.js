import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from "./FavoritesStack";
import TopStack from "./TopStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="restaurants"
        component={RestaurantsStack}
       options={{ title: "Restaurantes" }} 
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name="top-screens"
        component={TopStack}
        options={{ title: "Top" }}
      />
       <Tab.Screen
        name="search-screens"
        component={SearchStack}
        options={{ title: "Buscar" }}
      /> 
      <Tab.Screen
        name="account-screens"
        component={AccountStack}
        options={{ title: "Mi Cuenta" }}
      /> 
    </Tab.Navigator>
  );
}
