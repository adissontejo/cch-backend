export type allowedStorageKeys = 'players';

export interface ISocketStorage {
  store(key: allowedStorageKeys, data: any): undefined;
  getAll(key: allowedStorageKeys): any[];
  get(key: allowedStorageKeys, objectIdentifier: String): any;
}