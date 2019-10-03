import { createStore, Store } from 'redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { initialState } from './initialState';
import { Actions } from './Actions';
import { reducer } from './reducer';

type State = typeof initialState;
export const store: Store<State, Actions> = createStore(reducer);

export const useChunkState = <T>(path: (state: State) => T) => {
  const [chunkState, setChunkState] = useState<T>(path(store.getState()));

  useEffect(() => store.subscribe(() => {
    const chunkStateCurrent = path(store.getState());

    if (chunkStateCurrent !== chunkState) {
      process.nextTick(() => setChunkState(chunkStateCurrent));
    }
  }), []);

  return chunkState;
}

export default () => {
  const router = useRouter();
  const { logged } = useChunkState(s => s.login);

  if (logged) {
    router.push('/home');
    return null;
  }
}
