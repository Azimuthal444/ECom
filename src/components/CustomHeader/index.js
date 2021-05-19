import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomHeader = ({leftIcons = [], rightIcons = []}) => {
  return (
    <SafeAreaView style={styles.headerContainer} edges={['top']}>
      <View>{leftIcons.map(icon => icon)}</View>
      <View>{rightIcons.map(icon => icon)}</View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
});
