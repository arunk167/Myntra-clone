import React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Signup, LandingPage, MainPage, ProductDetail} from '../Screen';
import navigationStrings from '../constants/navigationStrings';
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <React.Fragment>
      {/* <Stack.Screen name={navigationStrings.LANDING_PAGE} component={LandingPage} /> */}
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />

      <Stack.Screen
        name={navigationStrings.PRODUCT_DETAIL}
        component={ProductDetail}
        options={{
          headerShown: false,
        }}
      />
    </React.Fragment>
  );
}

export default AuthStack;
