export type ScreenDetails = {
  id: string;
  componentName: string;
};

export const ScreensDetails: {[k: string]: ScreenDetails} = {
  App: {
    id: 'home',
    componentName: 'com.myApp.WelcomeScreen',
  },
  LoginScreen: {
    id: 'sign_in',
    componentName: 'com.myApp.LoginScreen',
  },
  RegisterScreen: {
    id: 'sign_up',
    componentName: 'com.myApp.RegisterScreen',
  },
  SettingsScreen: {
    id: 'settings',
    componentName: 'com.myApp.SettingsScreen',
  },
  AddArticleScreen: {
    id: 'addArticle',
    componentName: 'com.myApp.AddArticleScreen',
  },
  ProfileScreen: {
    id: 'profile',
    componentName: 'com.myApp.ProfileScreen',
  }
};
