import React from "react";
import {useSelector} from "react-redux";
import {messagesSelector} from '../model/selectors.js';


export const MessagesChatArea = () => {
  const messages = useSelector(messagesSelector);

  return (
    <div className="chat-messages overflow-auto px-5" id="messages-container">
      {
        messages.map(
          message => (
            <div className="text-break mb-2" key={message.id}>
              <b>{message.username}</b>: {message.body}
            </div>
          )
        )
      } 
    </div>
  )
}