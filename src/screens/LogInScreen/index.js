import React, {useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
    nameRequired,
    nameLengthRequirement,
    name,
  },
  navigation: {navigate},
  route: {
    params: {type},
  },
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onSubmit = useCallback(
    data => {
      if (type === screenNames.signUpScreen) {
        console.log('Signup');
      } else {
        console.log('Bye');
      }
    },
    [type],
  );

  return (
    <SafeAreaView edges={['bottom']} style={styles.screenContainer}>
      <Text style={styles.headingText}>
        {type === screenNames.signUpScreen ? signUp : logIn}
      </Text>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.loginFormContainer}>
        {type === screenNames.signUpScreen && (
          <Controller
            control={control}
            render={({field: {onBlur, onChange, value}}) => (
              <Input
                {...{onBlur, value}}
                placeholder={name}
                errorMessage={errors?.name?.message}
                onChangeText={val => onChange(val)}
                errorStyle={styles.errorTextStyle}
              />
            )}
            name="name"
            defaultValue=""
            rules={{
              required: {value: true, message: nameRequired},
              minLength: {value: 2, message: nameLengthRequirement},
            }}
          />
        )}
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
          title={type === screenNames.signUpScreen ? signUp : logIn}
          onPress={handleSubmit(onSubmit)}
        />
        <ErrorText text={undefined} />
        <View style={styles.bottomTextContainer}>
          <Text style={styles.signUpTextStyle}>{alreadyHaveAnAccount}</Text>
          <Pressable
            style={styles.signUpButton}
            onPress={() =>
              navigate(screenNames.logInScreen, {
                type:
                  type === screenNames.signUpScreen
                    ? screenNames.logInScreen
                    : screenNames.signUpScreen,
              })
            }>
            <Text style={{fontFamily: fonts.montserratSemiBold}}>
              {type === screenNames.signUpScreen ? logIn : signUp}
            </Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
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
