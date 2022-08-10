import axios from 'axios';
import {createURL, getHeaders} from '../utils';
import {User} from '../../stateManagement/store';

export const updateSettings = (user: Partial<User>) => {
  return axios.put(
    createURL('user'),
    {
      user,
    },
    {
      headers: getHeaders(),
    },
  );
};

export const getUser = (username: string) => {
  return axios.get(createURL(`profiles/${username}`), {
    headers: getHeaders(),
  });
};

export const followAuthor = (username: string) => {
  return axios.post(createURL(`profiles/${username}/follow`), undefined, {
    headers: getHeaders(),
  });
};

export const unfollowAuthor = (username: string) => {
  return axios.delete(createURL(`profiles/${username}/follow`), {
    headers: getHeaders(),
  });
};
