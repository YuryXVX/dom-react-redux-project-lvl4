import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import {handleGetChannels} from "./thunks.js";

export const channelsAdapter = createEntityAdapter();

const initialState = {
  currentChannelId: 1,
  loaded: true,
  ...channelsAdapter.getInitialState()
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannelId(state, {payload}) {
      state.currentChannelId = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetChannels.fulfilled, (state, action) => {
        const { payload: { channels, messages } } = action;

        channelsAdapter.setAll(state, channels);
      })
  }
})

export const {setCurrentChannelId} = channelsSlice.actions;

export {
  channelsSlice
};