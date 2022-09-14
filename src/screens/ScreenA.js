import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

const ScreenA = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('screenB')}>
        <Text>GO TO DETAILS SCREEN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({});
