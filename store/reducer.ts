import { initialState } from './initialState';
import { Actions } from './Actions';

export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'inc': return {
      ...state,
      ...action.set,
    };
  }

  return state;
};
