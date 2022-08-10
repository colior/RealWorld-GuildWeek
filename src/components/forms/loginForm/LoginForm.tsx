import React, {useState} from 'react';
import {View} from 'react-native';
import {InputBox} from '../../input/inputBox';
import {SiteButton} from '../../siteButton/siteButton';
import commonFormStyle from '../commonFormStyle';

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

export const LoginForm: React.FC<LoginFormProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={commonFormStyle.container}>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'Email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'Password'}
          textContentType={'password'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={commonFormStyle.button}>
        <SiteButton
          onPress={() => props.onSubmit(email, password)}
          title={'Sign in'}
        />
      </View>
    </View>
  );
};
