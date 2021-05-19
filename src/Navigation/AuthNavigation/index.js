import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import screenNames from '../../constants/screenNames';
import LaunchScreen from '../../screens/LaunchScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import LogInScreen from '../../screens/LogInScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.launchScreen}
        component={LaunchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={screenNames.logInScreen} component={LogInScreen} />
      <Stack.Screen name={screenNames.signUpScreen} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
