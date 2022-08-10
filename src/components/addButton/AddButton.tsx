import React from 'react';
import addButtonStyle from './style';
// @ts-ignore
import AddButtonIcon from '../../../assets/add-article.svg';
import {TouchableOpacity} from 'react-native';

type AddButtonProps = {
  onPress: () => void;
};

export const AddButton: React.FC<AddButtonProps> = props => {
  return (
    <TouchableOpacity style={addButtonStyle.container} onPress={props.onPress}>
      <AddButtonIcon width={30} height={30} fill={'#ffffff'} />
    </TouchableOpacity>
  );
};
