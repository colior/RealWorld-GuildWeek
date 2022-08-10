import axios from 'axios';
import {createURL} from '../utils';
import store from '../../stateManagement/store';

export const login = (email: string, password: string) => {
  return axios.post(createURL('users/login'), {
    user: {
      email,
      password,
    },
  });
};

export const logout = () => {
  store.currentUser = undefined;
};

export const register = (username: string, email: string, password: string) => {
  return axios.post(createURL('users'), {
    user: {
      username,
      email,
      password,
    },
  });
};
