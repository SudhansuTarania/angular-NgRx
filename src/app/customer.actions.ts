import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  ADD = '[Customer Component] Add',
  REMOVE = '[Customer Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.ADD;

  constructor(public payload: any){}
}

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.REMOVE;

  constructor(public payload: any){}
}