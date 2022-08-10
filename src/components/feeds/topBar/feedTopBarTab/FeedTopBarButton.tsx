import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import feedTopBarTabStyle from './style';

type FeedsTopBarTabProps = {
  title: string;
  onPress: () => void;
  isSelected: boolean;
};

export const FeedsTopBarTab: React.FC<FeedsTopBarTabProps> = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={
          props.isSelected
            ? [
                feedTopBarTabStyle.container,
                feedTopBarTabStyle.selectedContainer,
              ]
            : feedTopBarTabStyle.container
        }>
        <Text
          style={
            props.isSelected
              ? [feedTopBarTabStyle.text, feedTopBarTabStyle.selectedText]
              : feedTopBarTabStyle.text
          }>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
