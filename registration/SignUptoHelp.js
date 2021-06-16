import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'
import { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';

export default function SignUptoHelp ({navigation}) {
  const [state , setState] = useState({
    username: '', password: '', email: '', phone_number: ''
  })
  function onChangeText (key, val) {
    setState(
        x => {
            return {...x, key:val}
        }
    )
  }

  const [photo, setPhoto] = useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  function signUp (state) {
    const { username, password, email, phone_number } = state
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  
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
          {photo && (
            <>
              <Image
                source={{ uri: photo.uri }}
                style={{ width: 300, height: 300 }}
              />
            </>
          )}
      <Button title="Choose Photo" onPress={handleChoosePhoto} />
        <Button
          title='Sign Up'
          onPress={() => { 
              signUp(state);
              navigation.navigate('HomeScreen');
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