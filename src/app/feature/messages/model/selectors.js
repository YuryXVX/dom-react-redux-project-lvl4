import {channelsAdapter} from './store.js';


export const messagesSelector = (
  { channelReducers: { currentChannelId }, chatMessageReducers: { entities }}
  ) => {
  return entities.filter(({channelId}) => channelId === currentChannelId);
}
