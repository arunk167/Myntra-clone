import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
export default function CrazyDeals(props) {
  const {data, datapass} = props;
  return (
    <View>
      <Image style={{height: 270, width: 180}} source={{uri: data.image}} />
    </View>
  );
}
