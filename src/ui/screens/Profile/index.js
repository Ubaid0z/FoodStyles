import React, {useState} from 'react';
import {View, Dimensions, StyleSheet, Image, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Input, Button, Header} from '../../elements';
import dictionary from '../../../I18/dictionary.json';
import {generalTheme} from '../../theme/generalTheme';
import {screenWidth} from '../../theme/helpers';

export const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <Header title={dictionary.Profile} />
      <View style={generalTheme.linearGradient}>
        <View style={styles.inputView}>
          <Input
            title={dictionary.NameShown}
            customLabelStyle={styles.textColor}
            value={name}
            onChangeText={setName}
            maxLength={20}
            customStyle={styles.inputWidth}
          />
          <Input
            title={dictionary.Email}
            customLabelStyle={styles.textColor}
            value={email}
            onChangeText={setEmail}
            maxLength={20}
            customStyle={styles.inputWidth}
          />
        </View>

        <Button
          customTextStyle={[
            generalTheme.bold,
            generalTheme.uppercase,
            styles.textColor,
          ]}
          customStyle={generalTheme.backgroundColorWhite}
          title={dictionary.Logout}
          onPress={() => {}}
        />
        <Button
          customTextStyle={[generalTheme.bold, generalTheme.uppercase]}
          title={dictionary.Done}
          onPress={() => {}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputView: {
    marginVertical: 10,
    flex: 0.8,
  },
  textColor: {
    color: '#000',
  },
  inputWidth: {
    width: screenWidth / 1.15,
  },
});
