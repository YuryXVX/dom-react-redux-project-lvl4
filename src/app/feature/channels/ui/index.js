import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Channels} from '../index.js';
import {handleGetChannels} from '../model/thunks.js';
import {Nav} from 'react-bootstrap';
import {setCurrentChannelId} from '../model/store.js'
import {Button} from '../../../shared/ui/index.js';

export const ChannelList = () => {
  const channels = useSelector(Channels.selectors.channelSelector);
  const currentId = useSelector(Channels.selectors.currentChannelIdSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetChannels());
  }, []);

  const handleSetCurrentChannel = ({id}) => () => {
    dispatch(setCurrentChannelId(id));
  }

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <Nav className="flex-column w-100 p-2">
        {
          channels.map(channel => (
            <Nav.Item key={channel.id}>
              <Button 
                variant={channel.id !== currentId ? "light" : "secondary"} 
                className="w-100 mb-2" 
                size="m"
                onClick={handleSetCurrentChannel(channel)}
              >
                # {channel.name}
              </Button>
            </Nav.Item>
            )
          )
        }
      </Nav>
    </div>
  )
}