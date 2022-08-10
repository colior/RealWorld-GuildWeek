import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import userDetailsStyle from './style';
import {navigate} from '../../navigation/navigationUtils';
import {ScreensDetails} from '../../screens/screenDetails';

type UserDetailsProps = {
  username: string;
  image: string;
  commentTimestamp: Date;
  componentId: string;
};

export const UserDetails: React.FC<UserDetailsProps> = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(ScreensDetails.ProfileScreen, props.componentId, {
          username: props.username,
        });
      }}
      style={userDetailsStyle.container}>
      <Image style={userDetailsStyle.image} source={{uri: props.image}} />
      <View style={userDetailsStyle.textContainer}>
        <Text style={userDetailsStyle.username}>{props.username}</Text>
        <Text style={userDetailsStyle.timestamp}>
          {props.commentTimestamp.toDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
