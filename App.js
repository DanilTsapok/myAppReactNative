import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import SecondHome from "./pages/SecondHome";
import HomePage from "./pages/HomePage";

import { useState } from "react";
import Calculator from "./pages/Calculator";

const Tab = createBottomTabNavigator();
export default function App() {
  const [deleteimg, setDeleteImg] = useState();

  const handleDeleteImg = (img) => {
    setDeleteImg((prevDeleteImg) => [...prevDeleteImg, img]);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomePage">
        <Tab.Screen
          name="Галерея"
          component={HomePage}
          options={{
            tabBarIcon: () => {
              return <Entypo name="images" size={24} color="#7fafff" />;
            },
          }}
          initialParams={{ onDeleteImg: handleDeleteImg }}
        />
        <Tab.Screen
          name="Контакти"
          component={SecondHome}
          options={{
            tabBarIcon: () => {
              return (
                <Ionicons name="albums-outline" size={24} color="#7fafff" />
              );
            },
          }}
        />
        <Tab.Screen
          name="Калькулятор"
          component={Calculator}
          options={{
            tabBarIcon: () => {
              return (
                <FontAwesome name="calculator" size={24} color="#7fafff" />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
