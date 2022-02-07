import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from "./FavoritesStack";
import TopStack from "./TopStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "restaurants":
      iconName = "compass-outline";
      break;
    case "favorite":
      iconName = "heart-outline";
      break;
    case "top-screens":
      iconName = "star-outline";
      break;
    case "search-screens":
      iconName = "magnify";
      break;
    case "account-screens":
      iconName = "account-box-outline";
      break;

    default:
      break;
  }
  return (
    <Icon name={iconName} type="material-community" color={color} size={22} />
  );
}

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="restaurants"
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#00a680",
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
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
