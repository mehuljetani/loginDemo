import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen component={HomeScreen} name={'HomeScreen'} />
    </Stack.Navigator>
  );
};

export default StackNav;
