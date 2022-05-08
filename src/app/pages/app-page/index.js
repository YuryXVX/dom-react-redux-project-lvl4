import React from "react";
import {Channels} from "../../feature/channels/index.js";
import {ChatMessages} from '../../feature/messages/index.js';

export const AppPage = () => {
  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels.ChannelsListView />
        <ChatMessages.MessagesView />
      </div>
    </div>
  )
}