import { io } from 'socket.io-client';
import store from '../../providers/store.js';
import { addChatMessage } from '../../feature/messages/model/store.js';

export const SoketEvent = {
  CONNECT: 'connect',
  NEW_CHANNEL: 'newChannel',
  REMOVE_CHANNEL: 'removeChannel',
  RENAME_CHANNEL: 'renameChannel',
  NEW_MESSAGE: 'newMessage',
  CONNENCT_ERROR: 'connect_error'
}

class SocketApi {
  constructor({ store, socket }) {
    this._store = store;
    this._socket = socket;

    this._socketState = {
      status: null,
    } 

    this._initSocket();
  }

  get socketState() {
    return this._socketState.status;
  }

  set socketState(status) {
    this._socketState.status = status;
  }

  _initSocket() {
    this._socket.on(SoketEvent.CONNECT, () => {
      this._socketState.status = 'ok';
    });

    this._socket.on(SoketEvent.NEW_CHANNEL, (newChannel) => {
      // this._store.dispatch(addChannel(newChannel));
      this.socketState = 'ok';
    });

    this._socket.on(SoketEvent.REMOVE_CHANNEL, (removedChannel) => {
      // this._store.dispatch(removeChannel(removedChannel));
      this.socketState = 'ok';
    });

    this._socket.on(SoketEvent.RENAME_CHANNEL, (renamingChannel) => {
      // this._store.dispatch(renameChannel(renamingChannel));
      this.socketState = 'ok';
    });

    this._socket.on(SoketEvent.NEW_MESSAGE, (newMessage) => {
      this._store.dispatch(addChatMessage(newMessage));
      this.socketState = 'ok';
    });

    this._socket.on(SoketEvent.CONNENCT_ERROR, () => {
      this.socketState = 'errorConnection';
      this._socket.connect();
    });
  }

  emit(type, data, timeoutCallback){
    this._socket.volatile.emit(type, data, timeoutCallback(3000));
  }
}

const socket = io();
const socketInstance = new SocketApi({ store, socket });

export const socketApi = (type, data) => new Promise((resolve, reject) => {
  const withTimeout = (delay) => {
    const timer = setTimeout(() => {
      socketInstance.socketState.status = 'errorConnection';
    }, delay);

    return (resp) => {
      if (resp.status !== 'ok') {
        reject(resp.error);
      } else if (socketInstance.socketState === 'errorConnection') {
        const error = new Error('errorConnection');
        error.response = {
          status: 408,
        };
        reject(error);
      } else {
        resolve();
      }
      clearTimeout(timer);
    };
  };

  socketInstance.emit(type, data, withTimeout);
});