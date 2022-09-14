import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ScreenD = ({navigation, route}) => {
  const {itemName} = route.params;
  return (
    <View>
      <Text>ScreenD</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.goBack('screenC')
          // navigation.navigate('screenC',{msg:"stuti"})
          // navigation.setParams({itemName: "I've changed my value"})
        }>
        <Text> go back to screen c</Text>
      </TouchableOpacity>
      <Text>{route.params.itemName}</Text>
    </View>
  );
};

export default ScreenD;

const styles = StyleSheet.create({});
