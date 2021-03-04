import React from 'react';
import {View, Image} from 'react-native';
export default function Itemcategory(props) {
  const {data} = props;
  return <Image style={{width: '100%', height: 120}} source={data.image} />;
}
