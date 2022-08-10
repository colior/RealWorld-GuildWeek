import React from 'react';
import {GestureResponderEvent, Text, TouchableHighlight} from 'react-native';
import siteButtonStyle from './style';

type SiteButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  title: string;
};

export const SiteButton: React.FC<SiteButtonProps> = props => {
  return (
    <TouchableHighlight
      {...props}
      style={siteButtonStyle.container}
      underlayColor={siteButtonStyle.container.onPressColor}>
      <Text style={siteButtonStyle.button}>{props.title}</Text>
    </TouchableHighlight>
  );
};
