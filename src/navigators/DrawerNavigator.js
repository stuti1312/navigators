import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import ScreenC from '../screens/ScreenC';
import ScreenD from '../screens/ScreenD';
import ScreenE from '../screens/ScreenE';
import ScreenF from '../screens/ScreenF';
import ScreenG from '../screens/ScreenG';
import ScreenH from '../screens/ScreenH';
import ScreenI from '../screens/ScreenI';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="screenC"
      screenOptions={({route}) => ({
        drawerIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'screenC') {
            iconName = focused ? 'home' : 'people';
            color = focused ? 'blue' : 'gray';
            size = focused ? 30 : 25;
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
          return <Icon name={iconName} color={color} size={size} />;
        },
        drawerActiveTintColor: 'brown',
        drawerActiveBackgroundColor: 'skyblue',
        drawerInactiveTintColor: 'gray',
        drawerInactiveBackgroundColor: 'lightgray',
        drawerItemStyle: {backgroundColor: 'pink'},
        drawerLabelStyle: {fontSize: 25},
        // drawerContentContainerStyle:
        drawerContentStyle: {borderWidth: 5, borderColor: 'red'},
        drawerStyle: {backgroundColor: 'skyblue'},
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerHideStatusBarOnOpen: true, //show/hide statusbar
        drawerStatusBarAnimation: 'fade', //background faded
        gestureEnabled: true,
        swipeEnabled: true,
      })}>
      <Drawer.Screen name="screenC" component={ScreenC} />
      <Drawer.Screen name="screenD" component={ScreenD} initialParams={{itenName:"anushka"}}/>
      <Drawer.Screen name="Home" component={ScreenE} />
      <Drawer.Screen name="Networks" component={ScreenF} />
      <Drawer.Screen name="Post" component={ScreenG} />
      <Drawer.Screen name="Notifications" component={ScreenH} />
      <Drawer.Screen name="Jobs" component={ScreenI} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
