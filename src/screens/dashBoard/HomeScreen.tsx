import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import {GoogleSignin} from '@react-native-community/google-signin';
import {LoginManager} from 'react-native-fbsdk-next';

const HomeScreen = ({navigation}: any) => {
  const user = firebase.auth().currentUser;

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      // this.setState({user: null}); // Remember to remove the user from your app's state as well
      console.log('logout');
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  // const signOut = async () => {
  //   console.log('executing logout');

  //   try {
  //     LoginManager.logOut();
  //     const signOutResult = await auth().signOut();
  //     console.log('signOutResult', signOutResult);
  //   } catch (error) {
  //     console.error;
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text>Welcome to the world of Heaven...</Text>
      <Text>{user?.displayName}</Text>
      <Image source={{uri: user?.photoURL}} style={{height: 100, width: 100}} />
      <Text>{user?.email}</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
