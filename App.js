//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Restaurants from "./src/screens/Restaurants";
import Navigation from "./src/navigations/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
  );
}
