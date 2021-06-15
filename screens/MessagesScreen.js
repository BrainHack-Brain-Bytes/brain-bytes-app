import React from "react";
import { Text, View } from "react-native";

export default function MessagesScreen() {
    return (
      <View style={{alignContent: "center",justifyContent: "center", flex:1}}>
        <Text style={{textAlign: "center"}}>This is a test message</Text>
      </View>
    );
  }