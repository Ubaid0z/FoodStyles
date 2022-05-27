import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

export const ReactText = props => {
  const {title} = props;
  return (
    <>
      <Text {...props} style={[styles.textStyles, props.style]}>
        {title}
      </Text>
    </>
  );
};

ReactText.defaultProps = {
  title: '',
};

export default ReactText;
const styles = StyleSheet.create({
  textStyles: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    lineHeight: 28,
    color: '#fff',
  },
});
