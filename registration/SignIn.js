import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useState } from 'react'
import {  } from 'react-native-gesture-handler'
import { acc, call } from 'react-native-reanimated'
import AppButton from '../components/Button'

const approved = [
    {username: 'blackonyx', password: 'helloworld'},
    {username: 'bob', password: 'hi'},
    {username: 'brainbyte', password: 'candoit'},
]

export default function SignIn ({route, navigation}) {
  console.log(route)
  const [state , setState] = useState({
    username: '', password: ''
  })
  
  const [account, setAccount] = useState (
    approved
  )
  
  function addRegistration (list, callback) {
    console.log("before inside", account)
    setAccount(
        [...list, callback]
  );
    console.log("inside", account)
  }

  if (typeof route.params !== 'undefined') {
    console.log('after routed before, approved accounts', account);

      addRegistration(account, route.params.account);
  }



  function onChangeText (key, val) {
    setState({...state, [key]:val})
  }

  function signIn(state) {
    return account.some(x => ((x.username === state.username) && (x.password === state.password)))
  }

return (
      <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <AppButton
            title='Seeking Help'
            onPress={() => {
                if (signIn(state) ) {
                    navigation.navigate('UserHome', {...state});
                } else {
                    alert(`You have entered an invalid username or password, login?`)
                }
                }}
            />
            </View>
            <View style={styles.button}>
            <AppButton
                title='Giving Help'
                onPress={() => { 
                    navigation.navigate('Register');
                }}
            />
            </View>

        </View>
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
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button
            title='Sign In'
            onPress={() => { 
                if (signIn(state)) {
                    navigation.navigate('UserHome', {...state});
                } else {
                    alert(`You have entered an invalid username or password, login?`)
                }
                }}
            />
            </View>
            <View style={styles.button}>
            <Button
                title='Sign Up'
                onPress={() => { 
                    navigation.navigate('Register');
                }}
            />
            </View>

        </View>
        
        
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
  }, button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  }, buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})