import {api} from "../../../shared/api/index.js";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const handleGetChannels = createAsyncThunk(
  'channels/data',
  async () => {
    return await api.channels();
  }
);