import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import screenNames from '../../constants/screenNames';

const LaunchScreen = ({
  languageModel: {
    [screenNames.launchScreen]: {welcomeToApp, exploreUs},
  },
}) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text style={{fontFamily: fonts.montserratRegular}}>
          {welcomeToApp}
        </Text>
        <Text>{exploreUs}</Text>
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
});
