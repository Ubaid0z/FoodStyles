import React from 'react';
import {View, Dimensions, StyleSheet, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, ReactText} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {darkOrange, lightOrange} from '../../theme/colors';

export const Signup = () => {
  return (
    <View style={styles.mainView}>
      <LinearGradient
        colors={[darkOrange, lightOrange]}
        style={styles.linearGradient}>
        <ReactText title={dictionary.Login} />
        <View style={styles.inputView}>
          <Input value={email} onChangeText={setEmail} maxLength={20} />
          <Input value={password} onChangeText={setPassword} maxLength={20} />
        </View>

        <Button title={dictionary.Login} onPress={() => {}} />
        <ReactText title={dictionary.ForgotMyPassword} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  inputView: {
    marginVertical: 10,
  },
});
