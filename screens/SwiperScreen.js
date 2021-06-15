//Code modified from https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/
//Modal implementation modified from https://reactnavigation.org/docs/modal/
import React, {useRef,useState} from 'react';
import Swiper from 'react-native-deck-swiper'
import Card from '../components/Card'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import SAMPLE_ADVISORS from '../assets/dataAdvisors';

export default function SwiperScreen({navigation}) {
  
  const useSwiper = useRef(null).current
  const handleOnLeft = () => useSwiper.swipeLeft()
  const handleOnRight = () => useSwiper.swipeRight()
  
  const [isDone, setDone] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function renderModal(){
    return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }

  function renderSwiper() {
    if (isDone) {
      return (
        <View style ={{justifyContent: "center", alignItems: "center", flex:1, backgroundColor : "white"}}>
          <Text style = {{fontSize: 40}}> All Done!</Text>
        </View>
      )
    } else {
      return (
      <View style={{flex: 1}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
          {renderModal()}
        </Modal>
        <Swiper
          ref ={useSwiper}
          animateCardOpacity
          cards = {SAMPLE_ADVISORS}
          renderCard={card => <Card card={card}/>}
          cardIndex={0}
          stackSize={SAMPLE_ADVISORS.length}
          showSecondCard
          onSwipedAll={()=>{setDone(true)}}
          backgroundColor="white"
          onTapCard = {()=> setModalVisible(true)}
        ></Swiper>
      </View>
      )
    }
  }
  
  return (renderSwiper())
      
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
