import React, {useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import CustomButton from '../../components/CustomButton';

import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import {emailRegex} from '../../constants/regex';

const LogInScreen = ({
  languageModel: {
    logIn,
    email: emailLabel,
    password: passwordLabel,
    emailRequired,
    invalidEmail,
  },
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  console.log(errors);

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
              {...{onBlur, onChange, value}}
              placeholder={emailLabel}
              keyboardType="email-address"
              autoCapitalize="none"
              label={emailLabel}
              errorMessage={errors?.email?.message}
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
              {...{onBlur, onChange, value}}
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
          rules={{required: true}}
        />
        <CustomButton
          style={styles.buttonStyle}
          title={logIn}
          onPress={handleSubmit(onLogin)}
        />
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
