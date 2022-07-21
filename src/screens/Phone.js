import React, {useEffect, useState} from 'react';
import {Alert, Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

function Phone({navigation}) {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [code, setCode] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
      console.log('code = ', code);
      if (code) {
        // Alert.alert('done');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('invalid OTP');
      console.log('Invalid code.');
      return 0;
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+91 7016484904')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default Phone;
