//Code modified from https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/

import React, {useRef,useState} from 'react';
import Swiper from 'react-native-deck-swiper'
import Card from '../components/Card'
import { Text, View,  Dimensions, Image, } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function SwiperScreen() {

  //For now fixed number of sample cards to show functionality
  const SAMPLE_CARDS = [
    {id:"0", name:"James Tan", image: require('../assets/user0.jpg')},
    {id:"1", name:"Nicholas Lee", image: require('../assets/user1.jpg')},
  ]
  
  const useSwiper = useRef(null).current
  const handleOnLeft = () => useSwiper.swipeLeft()
  const handleOnRight = () => useSwiper.swipeRight()
  
  const [isDone, setDone] = useState(false);

  function renderSwiper() {
    if (isDone) {
      return <View style ={{justifyContent: "center", alignItems: "center", flex:1 }}>
        <Text style = {{fontSize: 40}}> All Done!</Text>
      </View>
    } else {
      return <Swiper
      ref ={useSwiper}
      animateCardOpacity
      containerStyle={{width:'80%', height: '80%'}}
      cards = {SAMPLE_CARDS}
      renderCard={card => <Card card={card}/>}
      cardIndex={0}
      backgroundColor="white"
      stackSize={SAMPLE_CARDS.length}
      showSecondCard
      onSwipedAll={()=>{setDone(true)}}
      />
    }
  }
  return (
    renderSwiper()
  );
}