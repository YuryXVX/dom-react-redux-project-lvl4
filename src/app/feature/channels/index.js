import {channelsSlice} from "./model/store.js";
import {channelSelector, currentChannelIdSelector, getCurrentChannel} from "./model/selectors.js";
import {ChannelList as ChannelsListView} from './ui/index.js';

const selectors = {
  channelSelector, 
  currentChannelIdSelector, 
  getCurrentChannel
}

export const Channels = {
  ChannelsListView,
  selectors
}

export default channelsSlice.reducer;