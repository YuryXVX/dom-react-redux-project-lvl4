import React from 'react';
import {useSelector} from "react-redux";
import {Channels} from "../../channels/index.js";

export const MessagesListHeader = () => {
  const currentChannel = useSelector(Channels.selectors.getCurrentChannel);

  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0"><b># {currentChannel ? currentChannel.name : '' }</b></p>
      <p className="text-muted">12 сообщений</p>
    </div>
  )
}