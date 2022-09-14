import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ScreenC = ({navigation,route}) => {
  return (
    <View>
      <Text>ScreenC</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('screenD', {itemName: 'Now I am on screen D'})
        }>
        <Text>go to screen d</Text>
      </TouchableOpacity>
      <Text>{route.params?.msg}</Text>
    </View>
  );
};

export default ScreenC;

const styles = StyleSheet.create({});
