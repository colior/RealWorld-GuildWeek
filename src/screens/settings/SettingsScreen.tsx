import React from 'react';
import {Text, View} from 'react-native';
import ScreenBase from '../screenBase';
import settingsScreenStyle from './style';
import {SettingsForm} from '../../components/forms/settingsForm/settingsForm';
import {updateSettings} from '../../services/user/userService';
import store from '../../stateManagement/store';
import {navigate} from '../../navigation/navigationUtils';
import {ScreensDetails} from '../screenDetails';

type SettingsProps = {
  componentId: string;
};

const SettingsScreen: React.FC<SettingsProps> = props => {
  return (
    <ScreenBase componentId={props.componentId}>
      <View style={settingsScreenStyle.container}>
        <View style={settingsScreenStyle.titleContainer}>
          <Text style={settingsScreenStyle.title}>Your Settings</Text>
        </View>
        <SettingsForm
          onSubmit={user => {
            updateSettings(user)
              .then(res => {
                store.currentUser = res.data.user;
                navigate(ScreensDetails.App, props.componentId);
              })
              .catch(e => console.error('failed to update settings!'));
          }}
        />
      </View>
    </ScreenBase>
  );
};

export default SettingsScreen;
