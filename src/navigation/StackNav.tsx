import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/dashBoard/HomeScreen';
import Login from '../screens/auth/Login';
import Phone from '../screens/Phone';
import FacebookSignIn from '../screens/FacebookSignIn';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={'Login'}>
      <Stack.Screen component={Login} name={'Login'} />
      <Stack.Screen component={HomeScreen} name={'HomeScreen'} />
      <Stack.Screen component={Phone} name={'Phone'} />
      <Stack.Screen component={FacebookSignIn} name={'FacebookSignIn'} />
    </Stack.Navigator>
  );
};

export default StackNav;
