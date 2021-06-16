import React from "react";
import { Text, View, FlatList, TouchableHighlight, Image } from "react-native";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import SAMPLE_ADVISORS from '../assets/dataAdvisors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function MessagesScreen() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ChatList} />
      <Stack.Screen name="ChatWindow" component={ChatBox} />
    </Stack.Navigator>
  );
}