import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ScreenE from '../screens/ScreenE';
import ScreenF from '../screens/ScreenF';
import ScreenG from '../screens/ScreenG';

const TopTab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={({routes}) => ({
        tabBarPosition: 'top',
      })}>
      <TopTab.Screen name="Home" component={ScreenE} />
      <TopTab.Screen name="Networks" component={ScreenF} />
      <TopTab.Screen name="Notifications" component={ScreenG} />
    </TopTab.Navigator>
  );
};

export default TopNavigator;
