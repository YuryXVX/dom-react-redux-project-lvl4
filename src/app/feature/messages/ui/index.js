import React from 'react';

import {MessagesChatArea} from './MessagesChatArea.js';
import {MessagesListHeader} from './MessagesListHeader.js';
import {MessagesChatForm} from './MessagesChatForm.js';

export const MessagesList = () => {
  return (
    <div className="col p-0 h-100">
      <MessagesListHeader  />
      <MessagesChatArea />
      <MessagesChatForm />
    </div>
  )
}