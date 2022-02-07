import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {firebaseApp} from './src/utils/firebase';
import Navigation from "./src/navigations/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Navigation />
  </NavigationContainer>
  );
}
