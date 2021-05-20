import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import CustomInput from '../../components/CustomInput';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const LogInScreen = ({
  languageModel: {logIn, email: emailLabel, password: passwordLabel},
}) => {
  const {control} = useForm();

  return (
    <SafeAreaView edges={['bottom']} style={styles.screenContainer}>
      <Text style={styles.headingText}>{logIn}</Text>
      <View style={styles.loginFormContainer}>
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <CustomInput
              placeholder={emailLabel}
              {...{onBlur, onChange, value}}
            />
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onBlur, onChange, value}}) => (
            <CustomInput
              placeholder={emailLabel}
              {...{onBlur, onChange, value}}
            />
          )}
          name="password"
          defaultValue=""
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
  loginFormContainer: {marginTop: 60, paddingHorizontal: 10},
});
