import React, {useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

import CustomButton from '../../components/CustomButton';
import ErrorText from '../../components/ErrorText';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import {emailRegex} from '../../constants/regex';
import screenNames from '../../constants/screenNames';

const LogInScreen = ({
  languageModel: {
    logIn,
    email: emailLabel,
    password: passwordLabel,
    emailRequired,
    invalidEmail,
    passwordRequired,
    alreadyHaveAnAccount,
    signUp,
  },
  navigation: {navigate},
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onLogin = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.screenContainer}>
      <Text style={styles.headingText}>{logIn}</Text>
      <View style={styles.loginFormContainer}>
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              {...{onBlur, value}}
              placeholder={emailLabel}
              keyboardType="email-address"
              autoCapitalize="none"
              errorMessage={errors?.email?.message}
              onChangeText={val => onChange(val)}
              errorStyle={styles.errorTextStyle}
            />
          )}
          name="email"
          defaultValue=""
          rules={{
            required: {value: true, message: emailRequired},
            pattern: {value: emailRegex, message: invalidEmail},
          }}
        />
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <Input
              {...{onBlur, value}}
              placeholder={passwordLabel}
              secureTextEntry={!showPassword}
              rightIcon={
                <Icon
                  name={showPassword ? 'visibility-off' : 'visibility'}
                  size={20}
                  onPress={() => setShowPassword(prevState => !prevState)}
                />
              }
              onChangeText={val => onChange(val)}
              errorMessage={errors?.password?.message}
              errorStyle={styles.errorTextStyle}
            />
          )}
          name="password"
          defaultValue=""
          rules={{required: {value: true, message: passwordRequired}}}
        />
        <CustomButton
          style={styles.buttonStyle}
          title={logIn}
          onPress={handleSubmit(onLogin)}
        />
        <ErrorText text={undefined} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.signUpTextStyle}>{alreadyHaveAnAccount}</Text>
          <Pressable
            style={styles.signUpButton}
            onPress={() => navigate(screenNames.signUpScreen)}>
            <Text style={{fontFamily: fonts.montserratSemiBold}}>{signUp}</Text>
          </Pressable>
        </View>
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
  buttonStyle: {width: '90%', marginVertical: 20},
  errorTextStyle: {marginLeft: 0, color: colors.torchRed},
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpTextStyle: {
    fontFamily: fonts.montserratMedium,
    color: colors.doveGray,
  },
  signUpButton: {padding: 10},
});
