import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {screenWidth} from '../../theme/helpers';
import ReactText from '../Text';
import {OptionIcon} from '../../../constants/ImageConstants';
import {generalTheme} from '../../theme/generalTheme';

export const ListRow = React.memo(props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.listCard, generalTheme.directionRow]}
      onPress={onPress}>
      <ReactText title={title} style={styles.textStyle} />
      <Image
        source={OptionIcon}
        style={styles.imageStyle}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  textColor: {
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  imageStyle: {
    width: screenWidth / 6,
    height: screenWidth / 12,
    marginVertical: 5,
  },
  textStyle: {
    width: screenWidth / 1.4,
    color: '#000',
    textAlign: 'left',
  },
  listCard: {
    backgroundColor: '#fff',
    width: screenWidth / 1.1,
    elevation: 2,
    margin: 5,
    borderRadius: 5,
    padding: 10,
  },
});
