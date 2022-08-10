import {Alert, Button, Text, View} from 'react-native';
import React from 'react';
import ScreenBase from '../../screenBase';
import styles from '../style';
import {register} from '../../../services/auth/authenticationService';
import {navigate} from '../../../navigation/navigationUtils';
import {RegisterForm} from '../../../components/forms/registerForm/RegisterForm';
import store from '../../../stateManagement/store';
import {ScreensDetails} from '../../screenDetails';

type RegisterProps = {
  componentId: string;
};

const RegisterScreen: React.FC<RegisterProps> = props => {
  return (
    <ScreenBase componentId={props.componentId}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign up</Text>
          <Button
            color={styles.subTitleButton.color}
            onPress={() => {
              navigate(ScreensDetails.LoginScreen, props.componentId);
            }}
            title={'Have an account?'}
          />
        </View>
        <View style={styles.form}>
          <RegisterForm
            onSubmit={(username, email, password) => {
              register(username, email, password)
                .then(res => {
                  store.login(res.data.user);
                  navigate(ScreensDetails.App, props.componentId);
                })
                .catch(() => {
                  console.error('Failed to register!');
                });
            }}
          />
        </View>
      </View>
    </ScreenBase>
  );
};

export default RegisterScreen;
