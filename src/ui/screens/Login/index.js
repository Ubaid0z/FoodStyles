import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {darkOrange, lightOrange} from '../../theme/colors';
import {generalTheme} from '../../theme/generalTheme';
import {loginAPi} from '../../../services/services';
import {useDispatch, useSelector} from 'react-redux';
import {hideLoading, showLoading} from '../../../store/slices/LoadingSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.LoadingSlice.loading);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const login = () => {
    dispatch(showLoading());
    loginAPi(email, password)
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
      <ReactText title={dictionary.Login} />
      <View style={styles.inputView}>
        <Input
          title={dictionary.Email}
          value={email}
          onChangeText={setEmail}
          maxLength={20}
        />
        <Input
          title={dictionary.Password}
          value={password}
          onChangeText={setPassword}
          maxLength={20}
        />
      </View>

      <Button
        customTextStyle={[generalTheme.bold, generalTheme.uppercase]}
        title={dictionary.Login}
        disabled={email === '' || password === ''}
        onPress={login}
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
