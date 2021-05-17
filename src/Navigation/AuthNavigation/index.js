import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import screenNames from '../../constants/screenNames';
import LaunchScreen from '../../screens/LaunchScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.launchScreen} component={LaunchScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
