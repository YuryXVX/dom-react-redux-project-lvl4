class Storage {
  constructor(store) {
    this._store = store;
  }

  setItem(key, data) {
    this._store.setItem(key, typeof data === 'object' ? JSON.stringify(data) : data);
  } 

  getItem(key) {
    return this._store.getItem(key)
  }

  deteleItem(key) {
    this._store.deteleItem(key)
  }
}

export const storage = new Storage(localStorage);