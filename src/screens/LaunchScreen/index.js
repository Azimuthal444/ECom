import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const LaunchScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View>
        <Text style={{fontFamily: fonts.montserratRegular}}>
          {'Welcome to App'}
        </Text>
        <Text>{'Explore Us'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
});
