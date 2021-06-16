import React from "react";
import { Text, View, FlatList, TouchableHighlight, Image, Alert } from "react-native";
import SAMPLE_ADVISORS from '../assets/dataAdvisors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function MessagesScreen({ navigation }) {
  function renderRow(chatContent) {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('ChatWindow', {
            image: chatContent.image,
            name: chatContent.name
          });
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", padding: 15, borderBottomWidth: 1, borderColor: "#b7b7b7" }}>
          <View style={{ marginLeft: 15 }}>
            <Image source={chatContent.image} style={{ width: 50, height: 50, borderRadius: 50 }} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{chatContent.name}</Text>
            <Text style={{ fontSize: 13 }}>{chatContent.bio}</Text>
          </View>
        </View>
      </TouchableHighlight >
    )
  }

  return (
    <FlatList
      data={SAMPLE_ADVISORS}
      renderItem={({ item }) => renderRow(item)}
    />
  );
}