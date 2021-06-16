import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import SwiperScreen from "./SwiperScreen";
import MessagesScreen from "./MessagesScreen"

const Tab = createMaterialTopTabNavigator();

export default function UserHomePage({route}) {
  console.log('Hi from user Home page', route);
  return (
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            gestureEnabled: false,
            tabBarIcon: ({ focused, color }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home"
              } else if (route.name === "Messages") {
                iconName = focused ? "envelope" : "envelope-o";
              }

              return <FontAwesome name={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
          swipeEnabled={false}
        >
          <Tab.Screen name="Home" component={SwiperScreen} />
          <Tab.Screen name="Messages" component={MessagesScreen} />
        </Tab.Navigator>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});