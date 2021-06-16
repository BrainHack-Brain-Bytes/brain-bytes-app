import React,{useState} from "react";
import { Text, View, FlatList, TouchableHighlight, Image, Modal } from "react-native";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import SAMPLE_ADVISORS from '../assets/dataAdvisors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function MessagesScreen() {

  const [modalVisible,setModalVisible] = useState(false)

  return (
    <View style={{flex: 1}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
          <ChatBox/>
        </Modal>
        <ChatList></ChatList>
      </View>
  );
}