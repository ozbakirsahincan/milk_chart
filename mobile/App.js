// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import AddScreen from "./screens/AddScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
        <Tab.Screen name="Ekle" component={AddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
