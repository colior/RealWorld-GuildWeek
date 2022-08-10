import React, {useState} from 'react';
import {View} from 'react-native';
import {User} from '../../../stateManagement/store';
import {InputBox} from '../../input/inputBox';
import {SiteButton} from '../../siteButton/siteButton';
import commonFormStyle from '../commonFormStyle';
import store from '../../../stateManagement/store';

type LoginFormProps = {
  onSubmit: (userDetails: Partial<User>) => void;
};

export const SettingsForm: React.FC<LoginFormProps> = props => {
  const [image, setImage] = useState(store.currentUser?.image);
  const [username, setUsername] = useState(store.currentUser?.username);
  const [email, setEmail] = useState(store.currentUser?.email);
  const [bio, setBio] = useState(store.currentUser?.bio);
  const [password, setPassword] = useState('');

  return (
    <View style={commonFormStyle.container}>
      <View style={commonFormStyle.input}>
        <InputBox
          type={'narrow'}
          placeholder={'URL of profile image'}
          value={image}
          onChangeText={setImage}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'Username'}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          type={'long'}
          placeholder={'Short bio about you'}
          value={bio}
          onChangeText={setBio}
        />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox placeholder={'Email'} value={email} onChangeText={setEmail} />
      </View>
      <View style={commonFormStyle.input}>
        <InputBox
          placeholder={'New Password'}
          textContentType={'password'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={commonFormStyle.button}>
        <SiteButton
          onPress={() =>
            props.onSubmit({
              username,
              image,
              email,
              bio,
            })
          }
          title={'Update Settings'}
        />
      </View>
    </View>
  );
};
