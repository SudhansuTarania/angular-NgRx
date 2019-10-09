import { ActionEx, CustomerActionTypes } from './customer.reducer';

export const initialState = [];

export function CustomerReducer (state = initialState, action: ActionEx) {
  switch(action.type) {
    case CustomerActionTypes.ADD:
      return [...state, action.payload];
    case CustomerActionTypes.REMOVE:
      return [...state.slice(0, action.payload), ...state.slice(action.payload+1)];
    default:
      return state;    
  }
}