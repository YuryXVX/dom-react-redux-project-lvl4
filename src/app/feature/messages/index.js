import {messagesSlice} from "./model/store.js";
import {MessagesList as MessagesView} from './ui/index.js';

export const ChatMessages = {
  MessagesView,
  messagesSlice
}

export default ChatMessages.messagesSlice.reducer;