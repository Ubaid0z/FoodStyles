import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {green} from '../../theme/colors';
import {screenWidth, screenHeight} from '../../theme/helpers';
import ReactText from '../Text';

export const Header = props => {
  const {title, onPress, icon, customStyle, customTextStyle} = props;
  return (
    <View>
      {title ? (
        <ReactText title={title} style={styles.textColor} />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={icon}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  imageStyle: {
    width: screenWidth / 6,
    height: screenWidth / 8,
    margin: 10,
  },
});
