import store from '../stateManagement/store';

export const API_URI = 'https://api.realworld.io/api';

export const createURL = (suffix: string) => {
  return `${API_URI}/${suffix}`;
};

export const getHeaders = () => {
  if (store.currentUser) {
    return {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${store.currentUser.token}`,
    };
  }
};
