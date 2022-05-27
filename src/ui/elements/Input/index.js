import React, {useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ReactText from '../Text';
import {screenWidth, screenHeight} from '../../theme/helpers';

export const Input = props => {
  const {
    title,
    value,
    onChangeText,
    maxLength,
    secureTextEntry,
    customStyle,
    customLabelStyle,
  } = props;
  const textInputRef = useRef(null);

  return (
    <>
      <ReactText
        title={title}
        style={[InputStyles.labelStyle, customLabelStyle]}
      />
      <TextInput
        {...props}
        autoCapitalize={'none'}
        testID="textinput"
        style={[InputStyles.textInput, customStyle]}
        ref={textInputRef}
        onChangeText={onChangeText}
        value={value}
        selectionColor={'#2F2926'}
        maxLength={maxLength ? maxLength : 1000}
        secureTextEntry={secureTextEntry}
        multiline={false}
      />
    </>
  );
};

Input.defaultProps = {
  title: '',
  secureTextEntry: false,
  value: '',
  maxLength: 20,
};

const InputStyles = StyleSheet.create({
  textInput: {
    height: 48,
    borderRadius: 8,
    paddingTop: 0,
    paddingBottom: 2,
    fontSize: 14,
    width: screenWidth / 1.3,
    backgroundColor: '#fff',
  },
  labelStyle: {
    alignSelf: 'flex-start',
    width: '80%',
  },
});
