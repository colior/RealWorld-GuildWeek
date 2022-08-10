import {makeAutoObservable} from 'mobx';

export type User = {
  bio: string;
  email: string;
  image: string;
  token: string;
  username: string;
};

class Store {
  selectedScreenId: string = 'home';
  currentUser: User | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  selectScreen(screenId: string) {
    this.selectedScreenId = screenId;
  }

  login(user: User) {
    this.currentUser = user;
  }

  logout() {
    this.currentUser = undefined;
  }
}

const store: Store = new Store();
export default store;
