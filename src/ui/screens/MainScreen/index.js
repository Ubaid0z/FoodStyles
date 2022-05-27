import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from 'react-native';
// Import FBSDK
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {LogoIcon} from '../../../constants/ImageConstants';
import {darkOrange, lightOrange} from '../../theme/colors';
import {generalTheme} from '../../theme/generalTheme';

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
    <LinearGradient
      colors={[lightOrange, darkOrange]}
      style={generalTheme.linearGradient}>
      <View style={styles.bodyCard}>
        <Image source={LogoIcon} style={styles.logoStyle} />
        <ReactText
          title={dictionary.FoodStyle}
          style={[{alignSelf: 'center', fontSize: 25}, generalTheme.bold]}
        />

        <ReactText
          title={dictionary.SignInText}
          style={{alignSelf: 'center', textAlign: 'center'}}
        />

        <Button
          title={dictionary.SignInApple}
          onPress={() => {}}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />
        <Button
          title={dictionary.SignInFacebook}
          onPress={() => {}}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />
        <Button
          title={dictionary.SignInGoogle}
          onPress={() => {}}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />
        <Button
          title={dictionary.SignUpEmail}
          onPress={() => {}}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />

        <ReactText title={dictionary.LoginWithEmail} />
      </View>

      <View style={styles.termsAndPolicy}>
        <ReactText title={dictionary.BySigningIn} />
        <View style={[generalTheme.directionRow]}>
          <Pressable
            style={[generalTheme.borderBottom, styles.borderBottomColor]}
            onPress={() => {}}>
            <Text style={styles.textColor}> {dictionary.GeneralTerms} </Text>
          </Pressable>
          <Text style={styles.textColor}> {dictionary.And} </Text>
          <Pressable
            style={[generalTheme.borderBottom, styles.borderBottomColor]}
            onPress={() => {}}>
            <Text style={styles.textColor}> {dictionary.PrivacyPolicy} </Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 8,
  },
  socialLoginButton: {
    backgroundColor: '#fff',
  },
  socialTextStyle: {
    color: '#000',
  },
  bodyCard: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsAndPolicy: {
    height: 70,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  textColor: {
    color: '#fff',
  },
  borderBottomColor: {
    borderBottomColor: '#fff',
  },
});
