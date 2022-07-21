import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNav from './src/navigation/StackNav';

const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default App;
