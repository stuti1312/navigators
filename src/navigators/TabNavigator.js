import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import ScreenE from '../screens/ScreenE';
import ScreenF from '../screens/ScreenF';
import ScreenG from '../screens/ScreenG';
import ScreenH from '../screens/ScreenH';
import ScreenI from '../screens/ScreenI';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        // title: 'ABCD', // same heading of tabs
        tabBarShowLabel: true, // show/hide tab heading
        tabBarLabelPosition: 'below-icon', // position of tab heading
        tabBarLabelStyle: {fontSize: 14,fontWeight:"700"}, //style tab heading
        tabBarIcon: ({focused, size, color}) => {
          //icon in tabs
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Networks') {
            iconName = 'people';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Post') {
            iconName = 'folder-open';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          } else if (route.name === 'Jobs') {
            iconName = 'briefcase';
            size = focused ? 30 : 25;
            color = focused ? 'blue' : 'gray';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarIconStyle: {}, //style icon
        // tabBarBadge: 2, //count/power on icon
        tabBarBadgeStyle: {backgroundColor: 'red'}, //style count
        tabBarActiveTintColor: 'black', //active tab heading color
        tabBarInactiveTintColor: 'brown', //inactive tab heading color
        tabBarActiveBackgroundColor: 'skyblue', //active tab bgcolor
        tabBarInactiveBackgroundColor: 'lightgray', //active tab bgcolor
        tabBarHideOnKeyboard:true,// hide/show bottom tab above keyborad
        unmountOnBlur:false,//keeps/removes navigation history of tabs
      })}>
      <Tab.Screen name="Home" component={ScreenE} options={{tabBarBadge:""}}/>
      <Tab.Screen name="Networks" component={ScreenF}/>
      <Tab.Screen name="Post" component={ScreenG}/>
      <Tab.Screen name="Notifications" component={ScreenH} options={{tabBarBadge:3}}/>
      <Tab.Screen name="Jobs" component={ScreenI} options={{tabBarBadge:9}}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
