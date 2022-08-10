import {Navigation} from 'react-native-navigation';
import {Screens} from './src/screens/screenRegistery';

for (const screen in Screens) {
  Navigation.registerComponent(
    Screens[screen].componentName,
    Screens[screen].componentProvider,
  );
}

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  animations: {
    setStackRoot: {
      waitForRender: true,
      enabled: false,
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Screens.App.componentName,
            },
          },
        ],
      },
    },
  });
});
