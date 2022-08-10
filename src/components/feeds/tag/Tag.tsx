import React from 'react';
import {Text, View} from 'react-native';
import tagStyle from './style';

type TagProps = {
  text: string;
};

export const Tag: React.FC<TagProps> = props => {
  return (
    <View style={tagStyle.container}>
      <Text style={tagStyle.text}>{props.text}</Text>
    </View>
  );
};
