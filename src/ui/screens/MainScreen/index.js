import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Image, TextInput} from 'react-native';
// Import FBSDK
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {LogoIcon} from '../../../constants/ImageConstants';

export const MainScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const getResponseInfo = (error, result) => {
    if (error) {
      //Alert for the Error
      alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      console.log(JSON.stringify(result));
      setUserName('Welcome ' + result.name);
      setToken('User Token: ' + result.id);
      setProfilePic(result.picture.data.url);
    }
  };

  const onLogout = () => {
    //Clear the state after logout

    setUserName(null);
    setToken(null);
    setProfilePic(null);
  };

  return (
    <View style={styles.mainView}>
      <Image source={LogoIcon} style={styles.logoStyle} />

      <ReactText title={dictionary.SignInText} />

      <LoginButton
        readPermissions={['public_profile']}
        onLoginFinished={(error, result) => {
          if (error) {
            alert(error);
            console.log('Login has error: ' + result.error);
          } else if (result.isCancelled) {
            alert('Login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
              const processRequest = new GraphRequest(
                '/me?fields=name,picture.type(large)',
                null,
                getResponseInfo,
              );
              // Start the graph request.
              new GraphRequestManager().addRequest(processRequest).start();
            });
          }
        }}
        onLogoutFinished={onLogout}
      />

      <ReactText title={dictionary.LoginWithEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 8,
  },
});
