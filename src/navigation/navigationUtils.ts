import {Navigation} from 'react-native-navigation';
import store from '../stateManagement/store';
import {ScreenDetails} from '../screens/screenDetails';

export const navigate = (
  screen: ScreenDetails,
  componentId: string,
  passProps?: any,
) => {
  Navigation.setStackRoot(componentId, {
    component: {
      name: screen.componentName,
      passProps,
    },
  });
  store.selectScreen(screen.id);
};
