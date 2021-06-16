import UserHomePage from './screens/UserHomePage'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from './registration/SignUp';
import SignIn from './registration/SignIn';
import AppButton from './components/Button'


// export default function App() {
//   return <UserHomePage></UserHomePage>
// }
import 'react-native-gesture-handler';

const Stacker = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stacker.Navigator>
          <Stacker.Screen name='HomeScreen' component={SignIn}  />
          <Stacker.Screen name='Register' component={SignUp}  />
          <Stacker.Screen name='UserHome' options={
            ({ navigation }) => ({
            title: 'Home',
            headerLeft: () => null, 
            headerRight: () => {<AppButton title='logout' onPress={()=> navigation.navigate('HomeScreen')} />}
          })} component={UserHomePage} />
        </Stacker.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
