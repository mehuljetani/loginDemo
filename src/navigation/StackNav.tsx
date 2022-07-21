import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/dashBoard/HomeScreen';
import Login from '../screens/auth/Login';
import Phone from '../screens/Phone';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={'Phone'}>
      <Stack.Screen component={Login} name={'Login'} />
      <Stack.Screen component={HomeScreen} name={'HomeScreen'} />
      <Stack.Screen component={Phone} name={'Phone'} />
    </Stack.Navigator>
  );
};

export default StackNav;
