import React from 'react';
import {StyleSheet, Text} from 'react-native';
import colors from '../../constants/colors';

const ErrorText = ({text = ''}) => {
  return <Text style={styles.errorTextStyle}>{text}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({errorTextStyle: {color: colors.torchRed}});
