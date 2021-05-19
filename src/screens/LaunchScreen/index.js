import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

import {launchScreenImage} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import screenNames from '../../constants/screenNames';

const LaunchScreen = ({
  languageModel: {
    [screenNames.launchScreen]: {welcomeToApp, exploreUs, logIn, signUp},
  },
  navigation: {navigate},
}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>{welcomeToApp}</Text>
        <Text style={styles.welcomeSubText}>{exploreUs}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={launchScreenImage} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={logIn}
          onPress={() => navigate(screenNames.logInScreen)}
        />
        <CustomButton
          title={signUp}
          style={styles.signUpButton}
          gradientEnabled={false}
          onPress={() => navigate(screenNames.signUpScreen)}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({languageModel}) => ({languageModel});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: fonts.montserratSemiBold,
    marginBottom: 16,
    fontSize: 20,
    color: colors.doveGray,
  },
  welcomeSubText: {
    fontSize: 18,
    fontFamily: fonts.montserratMedium,
    color: colors.doveGray,
  },
  imageContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  signUpButton: {marginTop: 8},
});
