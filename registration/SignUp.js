import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';

export default function SignUp ({navigation}) {
  const [state , setState] = useState({
    username: '', password: '', email: '', phone_number: ''
  })
  function onChangeText (key, val) {
    setState({...state, [key]:val});
  }

  // function signUp (state) {
  //   const { username, password, email, phone_number } = state
  //   try {
  //     // here place your signup logic
  //     console.log('user successfully signed up!: ', success)
  //   } catch (err) {
  //     console.log('error signing up: ', err)
  //   }
  // }

  
return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => onChangeText('phone_number', val)}
        />

        <Button
          title='Sign Up'
          onPress={() => { 
              navigation.navigate('HomeScreen', {account: state} );
            }}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})