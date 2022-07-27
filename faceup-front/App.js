// Désactiver les warnings sur Mobile
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]);

import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Import des composants Screens 

import HomeScreen from "./screens/HomeScreen";
import SnapScreen from "./screens/SnapScreen";
import GalleryScreen from "./screens/GalleryScreen";

// Import des composants nécessaires à la mise en place de la navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Mise en place du Bottom Navigator

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#009788",
        tabBarInactiveTintColor: "white",
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: 'black',
          },
          null,
        ],

        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == "Snap") {
            iconName = "camera";
          } else if (route.name == "Gallery") {
            iconName = "file-image-o";
          }
          return <FontAwesome name={iconName} size={25} color={color} />;
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: "#009788",
      //   inactiveTintColor: "#FFFFFF",
      //   style: {
      //     backgroundColor: "#111224",
      //   },
      // }}
    >
      <Tab.Screen name="Snap" component={SnapScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
