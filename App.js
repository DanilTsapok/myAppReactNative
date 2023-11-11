import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function Basket() {}
import SecondHome from "./pages/SecondHome";
import HomePage from "./pages/HomePage";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomePage">
        <Tab.Screen name="Галерея" component={HomePage} />
        <Tab.Screen name="Альбоми" component={SecondHome} />
        <Tab.Screen name="Корзина" component={Basket} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
