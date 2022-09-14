import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';

const Stack = createNativeStackNavigator();

export default StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="screenA">
      <Stack.Screen name="screenA" component={ScreenA} />
      <Stack.Screen name="screenB" component={ScreenB} />
    </Stack.Navigator>
  );
};
