import {StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../theme/helpers';

export const InputStyles = StyleSheet.create({
  passIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
    left: 'auto',
    zIndex: 2,
  },
  textInputPaddingHorizontalWithIc: {
    paddingLeft: 16,
    paddingRight: 48,
  },
  textInputPaddingHorizontalWithoutCountryCode: {
    paddingLeft: 60,
    paddingRight: 16,
  },
  countryCodeText: {
    position: 'absolute',
    top: 15,
    zIndex: 2,
  },
  inputParentView: {
    position: 'relative',
  },
  inputView: {
    position: 'relative',
  },
  textInput: {
    height: 48,
    borderRadius: 8,
    paddingTop: 0,
    paddingBottom: 2,
    fontSize: 14,
    width: screenWidth / 1.3,
  },
  textInputDisabled: {
    height: 48,
    borderRadius: 8,
    paddingTop: 0,
    paddingBottom: 2,
    fontSize: 14,
  },
  textInputPaddingHorizontalWithoutIc: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputGetHelp: {
    marginTop: 4,
  },
  textInputPlaceholder: {},
  inputLabel: {
    marginBottom: 6,
  },
  inputBorderWidth1: {
    borderWidth: 1,
  },
  inputBorderWidth2: {
    borderWidth: 2,
  },
});
