import React,{useState} from "react";
import { Text, View, FlatList, TouchableHighlight, Image, Modal } from "react-native";
import ChatBox from "./ChatBox";
import SAMPLE_ADVISORS from '../assets/dataAdvisors';

export default function MessagesScreen() {

  const [modalVisible,setModalVisible] = useState(false)
  const [selected, setSelected] = useState({name: '', image:''})

  function ChatList() {
    function renderRow(chatContent) {
      return (
        <TouchableHighlight
          onPress={() => {
            setSelected({...selected, name:chatContent.name, image:chatContent.image })
            setModalVisible(!modalVisible)
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
        data={[SAMPLE_ADVISORS[0]]}
        renderItem={({ item }) => renderRow(item)}
      />
    );
  }

  return (
    <View style={{flex: 1}}>
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
          <ChatBox name={selected.name} image={selected.image}/>
        </Modal>
        {ChatList()}
      </View>
  );
}