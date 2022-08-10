import React, {useState} from 'react';
import {StyleProp, TextInput, TextInputProps, TextStyle} from 'react-native';
import inputBoxStyle from './style';

type InputBoxProps = TextInputProps & {
  markError?: boolean;
  type?: 'long' | 'narrow';
};

export const InputBox: React.FC<InputBoxProps> = props => {
  const [focus, setFocus] = useState(!!props.autoFocus);

  const style: StyleProp<TextStyle> = [inputBoxStyle.input];
  if (props.markError) {
    style.push(inputBoxStyle.invalidInput);
  } else if (focus) {
    style.push(inputBoxStyle.focusInput);
  }
  if (props.type === 'narrow') {
    style.push(inputBoxStyle.narrowInput);
  } else if (props.type === 'long') {
    style.push(inputBoxStyle.longInput);
  }

  return (
    <TextInput
      multiline={props.type === 'long'}
      style={style}
      {...props}
      onFocus={e => {
        props.onFocus && props.onFocus(e);
        setFocus(true);
      }}
      onBlur={e => {
        props.onBlur && props.onBlur(e);
        setFocus(false);
      }}
    />
  );
};
