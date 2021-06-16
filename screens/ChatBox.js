import React, { useState } from 'react';
import { GiftedChat, sendBotResponse } from 'react-native-gifted-chat';
import { Text, View, FlatList, TouchableHighlight, Image } from "react-native";

export default function RoomScreen() {
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  function appendNewMessage() {
    console.log("Hello World")
    const simulatedResponse = {
      text: 'I see. It\'s normal to feel this way. Have you spoken to anyone about this?',
      createdAt: new Date().getTime() + 100000,
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
    setMessages(GiftedChat.append(messages, simulatedResponse))
  }

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage))
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#b7b7b7", height: "8%" }}>
        <View style={{ marginLeft: 15 }}>
          <Text> Image </Text>
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 8, fontWeight: 'bold' }}>Name </Text>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        quickReply
        onSend={newMessage => {
          handleSend(newMessage)
        }}
        user={{ _id: 1 }}
      />
    </View >
  );
}
