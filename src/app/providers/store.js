import {configureStore} from "@reduxjs/toolkit";
import loginReducers from "../feature/login/index.js";
import channelReducers from "../feature/channels/index.js";
import chatMessageReducers from "../feature/messages/index.js";

const store = configureStore({
  reducer: {
    loginReducers,
    channelReducers,
    chatMessageReducers
  },
})

export default store;