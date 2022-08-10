import React from 'react';
import {Button, Image, View} from 'react-native';
import styles from './style';
import {observer} from 'mobx-react';
import store from '../../stateManagement/store';
import {navigate} from '../../navigation/navigationUtils';
import {ScreenDetails, ScreensDetails} from '../../screens/screenDetails';
import {HamburgerMenu} from './hamburgerMenu/HamburgerMenu';
import {getScreenDimensions} from '../utils';
import {logout} from '../../services/auth/authenticationService';

type TopBarProps = {
  componentId: string;
};

export type TopBarButton = {
  id: string;
  title: string;
  showWhen: 'connected' | 'notConnected' | 'always';
  screen?: ScreenDetails;
  onClick?: (componentId: string) => void;
  skin?: 'default' | 'logout';
} & (
  | {
      screen: ScreenDetails;
      onClick?: undefined;
    }
  | {
      onClick: (componentId: string) => void;
      screen?: undefined;
    }
);

const TopBarButtons: TopBarButton[] = [
  {
    id: 'home',
    title: 'Home',
    screen: ScreensDetails.App,
    showWhen: 'always',
  },
  {
    id: 'sign_in',
    title: 'Sign in',
    screen: ScreensDetails.LoginScreen,
    showWhen: 'notConnected',
  },
  {
    id: 'sign_up',
    screen: ScreensDetails.RegisterScreen,
    title: 'Sign up',
    showWhen: 'notConnected',
  },
  {
    id: 'settings',
    screen: ScreensDetails.SettingsScreen,
    title: 'Settings',
    showWhen: 'connected',
  },
  {
    id: 'logout',
    title: 'Logout',
    showWhen: 'connected',
    skin: 'logout',
    onClick: (componentId: string) => {
      logout();
      navigate(ScreensDetails.App, componentId);
    },
  },
];

const getButtonsToShow = () => {
  const isUserConnected = !!store.currentUser;
  return TopBarButtons.filter(
    button =>
      button.showWhen === 'always' ||
      button.showWhen === (isUserConnected ? 'connected' : 'notConnected'),
  );
};

const TopBar: React.FC<TopBarProps> = props => {
  const buttons = getButtonsToShow();
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.logo}
        source={require('../../../assets/conduit_logo.png')}
      />
      <View style={styles.buttonsContainer}>
        {getScreenDimensions().width < 540 ? (
          <HamburgerMenu
            componentId={props.componentId}
            menuButtons={buttons}
          />
        ) : (
          buttons.map((topBarButton, index) => (
            <Button
              key={`top-bar-button-${index}`}
              title={topBarButton.title}
              onPress={() => {
                if (topBarButton.screen) {
                  navigate(topBarButton?.screen, props.componentId);
                } else if (topBarButton.onClick) {
                  topBarButton.onClick(props.componentId);
                }
              }}
              disabled={store.selectedScreenId === topBarButton.id}
              color={
                store.selectedScreenId === topBarButton.id
                  ? '#FFFFFF'
                  : '#000000'
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

const TopBarObserver = observer(TopBar);

export default TopBarObserver;
