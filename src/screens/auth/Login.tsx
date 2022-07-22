import {Alert, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/common/Button';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const Login = ({navigation}: any) => {
  const onGooglePress = () => {
    onGoogleButtonPress()
      .then(res => {
        navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log(err);
        return 0;
      });
  };

  GoogleSignin.configure({
    webClientId:
      '731719474260-p30dj6gh3h2f222hsbo2puhal43b5d3t.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const onTwitterPress = () => {};

  const onApplePress = () => {};

  const onFacebookPress = () => {
    onFacebookButtonPress()
      .then(res => {
        navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log(err);
      });
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    console.log(auth().currentUser?.displayName);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginWrapper}>
        {Platform.OS === 'android' ? (
          <Button
            btnName={'Sign In With Google'}
            onPress={onGooglePress}
            source={require('../../../assets/images/google.png')}
          />
        ) : (
          <></>
        )}
        <Button
          btnName={'Sign in with Facebook'}
          onPress={onFacebookPress}
          source={require('../../../assets/images/facebook.png')}
        />
        <Button
          btnName={'Sign in with Twitter'}
          onPress={onTwitterPress}
          source={require('../../../assets/images/twitter.png')}
        />
        <Button
          btnName={'Sign in with Mobile'}
          // onPress={{}}
          source={require('../../../assets/images/otp.png')}
        />
        {Platform.OS === 'ios' ? (
          <Button
            btnName={'Sign in with AppleId'}
            onPress={onApplePress}
            source={require('../../../assets/images/apple.png')}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  loginWrapper: {
    // flexDirection: 'row',
  },
});
