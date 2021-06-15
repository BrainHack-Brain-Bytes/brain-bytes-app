//Code modified from https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/
import React, {useRef,useState} from 'react';
import { Text, View,  Dimensions, Image, } from 'react-native';
import SwiperScreen from './screens/SwiperScreen'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {

  return (<SwiperScreen></SwiperScreen>)

}