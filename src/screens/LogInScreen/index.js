import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import CustomButton from '../../components/CustomButton';

import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const LogInScreen = ({
  languageModel: {logIn, email: emailLabel, password: passwordLabel},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {control} = useForm();

  return (
    <SafeAreaView edges={['bottom']} style={styles.screenContainer}>
      <Text style={styles.headingText}>{logIn}</Text>
      <View style={styles.loginFormContainer}>
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              placeholder={emailLabel}
              keyboardType="email-address"
              autoCapitalize="none"
              label={emailLabel}
            />
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              placeholder={passwordLabel}
              secureTextEntry={!showPassword}
              label={passwordLabel}
              rightIcon={
                <Icon
                  name={showPassword ? 'visibility-off' : 'visibility'}
                  size={20}
                  onPress={() => setShowPassword(prevState => !prevState)}
                />
              }
            />
          )}
          name="password"
          defaultValue=""
        />
        <CustomButton style={styles.buttonStyle} title={logIn} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({languageModel}) => ({languageModel});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LogInScreen);

const styles = StyleSheet.create({
  screenContainer: {backgroundColor: colors.white, flex: 1},
  headingText: {
    marginLeft: 10,
    marginTop: 4,
    fontSize: 30,
    fontFamily: fonts.montserratMedium,
  },
  loginFormContainer: {
    marginTop: 60,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  buttonStyle: {width: '90%', marginTop: 20},
});
