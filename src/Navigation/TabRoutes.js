import React, {Component} from 'react';
import { Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Cart, HomePage, Profile, LatestDeals} from "../Screen/index"
import imagePath from '../../imagePath'
import navigationStrings from '../constants/navigationStrings';



const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name={navigationStrings.HOMEPAGE} component={HomePage}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.home_active}
            style={{
              width: size,
              height: size,
              tintColor: focused ? '#FF3E6C' : 'black',
            }}
          />
        ),
      }} />
      <Tab.Screen name="Latest Deals" component={LatestDeals}
      options={{
        tabBarLabel: 'Category',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.category_active}
            style={{
              width: size,
              height: size,
              tintColor: focused ? '#FF3E6C' : 'black',
            }}
          />
        ),
      }}
      />
      
      <Tab.Screen name={navigationStrings.PROFILE} component={Profile}
      options={{
        tabBarLabel: 'Profile',
       
         
        
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.profile_active}
            style={{
              width: size,
              height: size,
              tintColor: focused ? '#FF3E6C' : 'black',
            }}
          />
        ),
      }} />
    </Tab.Navigator>
  );
}


export default TabRoutes;