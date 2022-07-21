import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({btnName, onPress, source}: any) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Image source={source} style={{height: 60, width: 60}} />
      <Text style={{color: 'black', marginTop: 10}}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent:ce
  },
  btnStyle: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
