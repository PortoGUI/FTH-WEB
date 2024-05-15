import {v4 as uuid} from 'uuid';

export class ObjectState {
  object_state?: State;
  _KEY_?: string;

  constructor() {
    this._KEY_ = uuid();
  }
}

export enum State {
  INSERTED,
  MODIFIED,
  UNMODIFIED,
  DELETED,
}
