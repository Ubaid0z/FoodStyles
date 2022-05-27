import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {LogoIcon} from '../../../constants/ImageConstants';
import {darkOrange, lightOrange} from '../../theme/colors';
import {generalTheme} from '../../theme/generalTheme';
// Import Google Signin
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

import {useNavigation} from '@react-navigation/native';

var fbToken = '';
var username = '';
var profilePic = '';
export const MainScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userInfo, setUserInfo] = useState(null);
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    // Initial configuration
    GoogleSignin.configure({
      scopes: [
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.profile',
      ],
      webClientId:
        '96259814720-adkvpqpgiiqqgrim2naund3dgkruk2o6.apps.googleusercontent.com',
    });
    _isSignedIn();
  }, []);

  const _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      console.log('User is already signed in');
      // Get User Info if user is already signed in
      try {
        let info = await GoogleSignin.signInSilently();
        console.log('User Info --> ', info);
        // props.navigation.navigate('Home', {userInfo: info});
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
          alert('User has not signed in yet');
          console.log('User has not signed in yet');
        } else {
          alert("Unable to get user's info");
          console.log("Unable to get user's info", error);
        }
      }
    }
    setLoading(false);
  };
  const getResponseInfo = (error, result) => {
    if (error) {
      //Alert for the Error
      alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      console.log('result api ', JSON.stringify(result));

      username = 'Welcome ' + result.name;
      // token = ('User Token: ' + result.id);
      profilePic = result.picture.data.url;
    }
  };

  async function FacebookLogin() {
    await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
      'user_friends',
    ])
      .then(
        async result => {
          console.log(result);
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            console.log(
              'Login success with permissions: ' +
                result.grantedPermissions.toString(),
            );

            await AccessToken.getCurrentAccessToken().then(data => {
              fbToken = data;
              console.log('Token===', JSON.stringify(fbToken));
            });

            const processRequest = new GraphRequest(
              '/me?fields=name,picture.type(large),email,first_name,last_name',
              null,
              getResponseInfo,
            );
            console.log('process request', processRequest);

            // Start the graph request.
            const api = new GraphRequestManager()
              .addRequest(processRequest)
              .start();
          }
        },
        function ss(error) {
          console.log('Login fail with error: ' + error);
        },
        LoginManager.getLoginBehavior(),
      )
      .catch(err => {
        console.log(err);
      });
  }

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      const currentUser = GoogleSignin.getTokens().then(async res => {
        console.log(res.accessToken); //<-------Get accessToken

        var postData = {
          access_token: res.accessToken,
          code: userInfo.idToken,
        };

        console.log(postData);
      });

      dispatch(
        googleLoginAction(
          {
            displayName: userInfo.user.name,
            email: userInfo.user.email,
            firstName: userInfo.user.givenName,
            lastName: userInfo.user.familyName,
            fullName: userInfo.user.name,
          },
          props.navigation,
        ),
      );
      // props.navigation;
      // props.navigation.navigate('Home');
      // navigation.replace('HomeScreen', {userInfo: userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services Not Available or Outdated');
      } else {
        console.log('error.message', JSON.stringify(error));
        alert(error.message);
      }
    }
  };
  const _signOut = async () => {
    setGettingLoginStatus(true);
    // Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // Removing user Info
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
    setGettingLoginStatus(false);
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
          onPress={FacebookLogin}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />
        <Button
          title={dictionary.SignInGoogle}
          onPress={_signIn}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />
        <Button
          title={dictionary.SignUpEmail}
          onPress={() => navigation.navigate('Signup')}
          customStyle={styles.socialLoginButton}
          customTextStyle={styles.socialTextStyle}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <ReactText title={dictionary.LoginWithEmail} />
        </TouchableOpacity>
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
