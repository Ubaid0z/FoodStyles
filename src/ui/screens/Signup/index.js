import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {LogoIcon} from '../../../constants/ImageConstants';
import {darkOrange, lightOrange} from '../../theme/colors';
import {generalTheme} from '../../theme/generalTheme';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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
