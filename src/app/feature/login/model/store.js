import { createSlice } from "@reduxjs/toolkit";
import { handleAuthentication } from './thunks.js';

const initialState = {
    user: null,
    error: null,
};

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, {payload}) {
      state.user = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleAuthentication.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.error = false;
          
          return state;
      })
      .addCase(handleAuthentication.rejected, 
      (state) => {
        state.error = true;
      }
    );
  } 
})

const {reducer: loginReducers} = loginSlice;

export const {setUser} = loginSlice.actions;

export {
  initialState,
  loginSlice,
  loginReducers
};