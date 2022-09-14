import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigators/StackNavigator';
import TabNavigator from './src/navigators/TabNavigator';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import TopNavigator from './src/navigators/TopNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <DrawerNavigator /> */}
        <TabNavigator/>
        {/* <TopNavigator /> */}
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
