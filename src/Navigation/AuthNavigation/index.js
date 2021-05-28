import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import screenNames from '../../constants/screenNames';
import LaunchScreen from '../../screens/LaunchScreen';
import LogInScreen from '../../screens/LogInScreen';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerStyle: styles.headerStyle}}>
      <Stack.Screen
        name={screenNames.launchScreen}
        component={LaunchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.logInScreen}
        component={LogInScreen}
        options={({navigation: {goBack}}) => ({
          headerTitle: false,
          headerLeft: ({}) => (
            <Icon
              name={'arrow-back'}
              size={24}
              style={styles.iconStyle}
              onPress={goBack}
            />
          ),
        })}
      />
      <Stack.Screen
        name={screenNames.signUpScreen}
        component={LogInScreen}
        options={({navigation: {goBack}}) => ({
          headerTitle: false,
          headerLeft: ({}) => (
            <Icon
              name={'arrow-back'}
              size={24}
              style={styles.iconStyle}
              onPress={goBack}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  iconStyle: {padding: 10},
  headerStyle: {shadowColor: 'transparent'},
});
