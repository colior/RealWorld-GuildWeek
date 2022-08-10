import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import likeButtonStyle from './style';
// @ts-ignore
import LikeIconFull from '../../../../assets/like_icon_full.svg';
// @ts-ignore
import LikeIconEmpty from '../../../../assets/like_icon_empty.svg';

type LikeButtonProps = {
  count: number;
  favorited: boolean;
  onLike: () => void;
  onUnlike: () => void;
  disabled: boolean;
};

export const LikeButton: React.FC<LikeButtonProps> = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={
        props.disabled
          ? [likeButtonStyle.container, likeButtonStyle.containerDisabled]
          : likeButtonStyle.container
      }
      onPress={() => {
        props.favorited ? props.onUnlike() : props.onLike();
      }}>
      <View style={likeButtonStyle.icon}>
        {props.favorited ? (
          <LikeIconFull
            width={17}
            fill={likeButtonStyle.container.borderColor}
          />
        ) : (
          <LikeIconEmpty
            width={17}
            fill={likeButtonStyle.container.borderColor}
          />
        )}
      </View>
      <Text style={likeButtonStyle.text}>{props.count}</Text>
    </TouchableOpacity>
  );
};
