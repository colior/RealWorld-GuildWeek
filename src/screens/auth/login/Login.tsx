import {Button, Text, View} from 'react-native';
import React from 'react';
import ScreenBase from '../../screenBase';
import styles from '../style';
import {LoginForm} from '../../../components/forms/loginForm/LoginForm';
import {login} from '../../../services/auth/authenticationService';
import {navigate} from '../../../navigation/navigationUtils';
import store from '../../../stateManagement/store';
import {ScreensDetails} from '../../screenDetails';

type LoginProps = {
  componentId: string;
};

const LoginScreen: React.FC<LoginProps> = props => {
  return (
    <ScreenBase componentId={props.componentId}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign in</Text>
          <Button
            color={styles.subTitleButton.color}
            onPress={() => {
              navigate(ScreensDetails.RegisterScreen, props.componentId);
            }}
            title={'Need an account?'}
          />
        </View>
        <View style={styles.form}>
          <LoginForm
            onSubmit={(email, password) => {
              login(email, password)
                .then(res => {
                  store.login(res.data.user);
                  navigate(ScreensDetails.App, props.componentId);
                })
                .catch(e => {
                  console.error(e.response.data.errors);
                });
            }}
          />
        </View>
      </View>
    </ScreenBase>
  );
};

export default LoginScreen;
