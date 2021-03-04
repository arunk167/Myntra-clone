import React from 'react';
import {View, Text, Image} from 'react-native';
export default function Category(props) {
  const {data} = props;
  return (
    <View style={{marginHorizontal: 7}}>
      <Image
        style={{height: 60, width: 60, borderRadius: 60}}
        source={{uri: data.image}}
      />
      <Text
        style={{
          alignSelf: 'center',
          color: 'gray',
          fontSize: 13,
          marginVertical: 5,
        }}>
        {data.title}
      </Text>
    </View>
  );
}
