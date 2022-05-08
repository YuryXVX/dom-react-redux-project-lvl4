import {USER_STORAGE_KEY} from "../../../consts.js";
import {storage} from "../storage/storage.js";

export const getUser = () => {
  const user = storage.getItem(USER_STORAGE_KEY);

  if(user) {
    return JSON.parse(user);
  }

  return null;
}

export const isAuthenticated = (user) => {
  try {
    if(user.token) {
      return true;
    };

    throw Erorr('not auth');
  } catch (error) {
    return false;
  }
}

export const setToken = () => {
  const user = getUser();
  
  if(user) {
    return `Bearer ${user.token}`;
  }

  return null;
}