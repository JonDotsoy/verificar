import { initialState } from './initialState';
import { Actions } from './Actions';
import { isFunction } from 'util';

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'inc': return {
      ...state,
      ...(isFunction(action.set) ? action.set(state) : action.set),
    };
  }

  return state;
};
