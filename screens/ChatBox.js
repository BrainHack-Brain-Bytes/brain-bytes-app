import React, { useState, useEffect } from 'react';
import { GiftedChat, sendBotResponse } from 'react-native-gifted-chat';
import { Text, View, FlatList, TouchableHighlight, Image } from "react-native";

export default function RoomScreen(props) {

  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello. Nice to meeting you.Please be ensure that everything we speak here well be confidential.What\'s the issue that you are facing? ',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    },
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
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
      <View style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: "#b7b7b7", height: "8%", backgroundColor: "#FFF2FC", borderRadius: 5 }}>
        
        <View style={{ marginLeft: 15, justifyContent: 'center' }}>
          <Image source={props.image} style={{ width: 35, height: 35, borderRadius: 50 }} />
        </View>
        <View style={{ marginLeft: 15, justifyContent: 'center' }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name} </Text>
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
