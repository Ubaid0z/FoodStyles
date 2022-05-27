import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {green} from '../../theme/colors';
import {screenWidth, screenHeight} from '../../theme/helpers';

export const Button = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textColor}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: green,
    width: screenWidth / 2,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#fff',
  },
});
