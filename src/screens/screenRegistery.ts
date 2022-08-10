import HomeScreen from './home/HomeScreen';
import LoginScreen from './auth/login/Login';
import React from 'react';
import RegisterScreen from './auth/register/Register';
import {ScreensDetails} from './screenDetails';
import SettingsScreen from './settings/SettingsScreen';
import AddArticleScreen from './addArticle/AddArticleScreen';
import ProfileScreen from './profile/profileScreen';

type ScreenType = {
  id: string;
  componentName: string;
  componentProvider: () => React.FC<any>;
};

export const Screens: {[k: string]: ScreenType} = {
  App: {
    id: ScreensDetails.App.id,
    componentName: ScreensDetails.App.componentName,
    componentProvider: () => HomeScreen,
  },
  LoginScreen: {
    id: ScreensDetails.LoginScreen.id,
    componentName: ScreensDetails.LoginScreen.componentName,
    componentProvider: () => LoginScreen,
  },
  RegisterScreen: {
    id: ScreensDetails.RegisterScreen.id,
    componentName: ScreensDetails.RegisterScreen.componentName,
    componentProvider: () => RegisterScreen,
  },
  SettingsScreen: {
    id: ScreensDetails.SettingsScreen.id,
    componentName: ScreensDetails.SettingsScreen.componentName,
    componentProvider: () => SettingsScreen,
  },
  AddArticleScreen: {
    id: ScreensDetails.AddArticleScreen.id,
    componentName: ScreensDetails.AddArticleScreen.componentName,
    componentProvider: () => AddArticleScreen,
  },
  ProfileScreen: {
    id: ScreensDetails.ProfileScreen.id,
    componentName: ScreensDetails.ProfileScreen.componentName,
    componentProvider: () => ProfileScreen,
  },
};
