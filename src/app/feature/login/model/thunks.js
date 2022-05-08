import {api} from "../../../shared/api/index.js";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {storage} from "../../../shared/helpers/storage/storage.js";
import {USER_STORAGE_KEY} from "../../../consts.js";

export const handleAuthentication = createAsyncThunk(
  'user/auth',
  async ({user, onErrors, onRedirect}) => {
    try {
      const { data } = await api.auth(user);

      storage.setItem(USER_STORAGE_KEY, data);
      onRedirect('/');

      return data;
    } catch(error) {
      onErrors({
        username: 'This is email already exist.',
        password: 'This is password is incorrect',
      })
    }
  }
);