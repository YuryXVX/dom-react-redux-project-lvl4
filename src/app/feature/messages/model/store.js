import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import {handleGetChannels} from '../../channels/model/thunks.js';

export const messagesAdapter = createEntityAdapter();

const initialState = {
  entities: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {    
    addChatMessage: (state, { payload }) => {
      state.entities.push(payload);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(
      handleGetChannels.fulfilled,
      (state, {payload: { messages }}) => {
        state.entities = messages;
      }
    ) 
  }
})

export const {addChatMessage}  = messagesSlice.actions;

export {
  messagesSlice
};