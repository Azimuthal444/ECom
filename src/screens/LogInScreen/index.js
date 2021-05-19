import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const LogInScreen = ({languageModel: {logIn}}) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.screenContainer}>
      <Text style={styles.headingText}>{logIn}</Text>
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
});
