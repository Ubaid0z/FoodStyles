import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {LogoIcon} from '../../../constants/ImageConstants';
import {darkOrange, lightOrange} from '../../theme/colors';
import {generalTheme} from '../../theme/generalTheme';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        onPress={() => {}}
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
