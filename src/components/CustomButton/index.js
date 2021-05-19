import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const CustomButton = ({
  onPress = null,
  style = null,
  gradientEnabled = true,
  title = '',
}) => {
  const ButtonComponent = useCallback(
    ({buttonStyle, textStyle}) => (
      <Pressable style={[styles.defaultStyle, buttonStyle]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </Pressable>
    ),
    [onPress, title],
  );

  if (gradientEnabled) {
    return (
      <LinearGradient
        colors={['rgb(104,130,231)', 'rgb(104,183,252)']}
        style={[styles.defaultStyle, style]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <ButtonComponent />
      </LinearGradient>
    );
  } else {
    return (
      <ButtonComponent buttonStyle={style} textStyle={{color: colors.black}} />
    );
  }
};

export default CustomButton;

const styles = StyleSheet.create({
  defaultStyle: {
    height: 50,
    borderRadius: 8,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.montserratMedium,
    fontSize: 16,
  },
});
