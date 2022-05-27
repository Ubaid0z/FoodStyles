import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {hideLoading, showLoading} from '../../../store/slices/LoadingSlice';
import {darkOrange, lightOrange} from '../../theme/colors';
import {generalTheme} from '../../theme/generalTheme';
import {signupApi} from '../../../services/services';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const signup = () => {
    dispatch(showLoading());
    signupApi(email, password, name)
      .then(data => {
        AsyncStorage.setItem(
          'token',
          JSON.stringify(data.data.loginWithEmail.accessToken),
        );
        navigation.navigate('Home');
        dispatch(hideLoading());
      })
      .catch(e => {
        console.log('error');
      });
  };

  return (
    <LinearGradient
      colors={[lightOrange, darkOrange]}
      style={styles.linearGradient}>
      <ReactText title={dictionary.SignUpEmail} />
      <View style={styles.inputView}>
        <Input
          title={dictionary.YourName}
          value={name}
          onChangeText={setName}
          maxLength={20}
        />
        <Input
          title={dictionary.Email}
          value={email}
          onChangeText={setEmail}
          maxLength={20}
        />
        <Input
          title={dictionary.MinPassword}
          value={password}
          onChangeText={setPassword}
          maxLength={20}
        />
      </View>

      <Button
        customTextStyle={[generalTheme.bold, generalTheme.uppercase]}
        title={dictionary.SignUp}
        onPress={signup}
      />
      <ReactText title={dictionary.ForgotMyPassword} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputView: {
    marginVertical: 10,
  },
});
