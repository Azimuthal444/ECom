import React, {useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  UIManager,
  View,
} from 'react-native';
import colors from '../../constants/colors';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomInput = ({placeholder, value, onChange, onBlur}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.inputContainer}>
      {isFocused && <Text>{placeholder}</Text>}
      <TextInput
        placeholder={isFocused ? '' : placeholder}
        value={value}
        onChangeText={val => onChange(val)}
        style={styles.inputStyle}
        onFocus={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          setIsFocused(true);
        }}
        onBlur={() => {
          value === '' && setIsFocused(false);
          onBlur();
        }}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.black,
  },
  inputStyle: {flex: 1},
});
