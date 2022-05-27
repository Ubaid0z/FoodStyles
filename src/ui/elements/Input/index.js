import React, {useRef} from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';

import ReactText from '../Text';
import {InputStyles} from './styles';

export const Input = props => {
  const {title, value, onChangeText, maxLength, secureTextEntry} = props;
  const textInputRef = useRef(null);

  return (
    <>
      <ReactText title={title} />
      <TextInput
        {...props}
        autoCapitalize={'none'}
        testID="textinput"
        style={[InputStyles.textInput, InputStyles.inputBorderWidth1]}
        ref={textInputRef}
        onChangeText={onChangeText}
        value={value}
        selectionColor={'#2F2926'}
        maxLength={maxLength ? maxLength : 1000}
        secureTextEntry={secureTextEntry}
        multiline={false}
      />
      {/* {renderIcon()} */}
    </>
  );
};

// Input.propTypes = {
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   textAlign: PropTypes.oneOfType([PropTypes.string]),
//   secureTextEntry: PropTypes.oneOfType([PropTypes.boolean]),
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
// };

Input.defaultProps = {
  title: '',
  secureTextEntry: false,
  value: '',
  maxLength: 20,
};
