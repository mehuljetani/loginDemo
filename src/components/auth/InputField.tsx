import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {OPEN_EYE} from '../../../helper/constants';

const InputField = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
