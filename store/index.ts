import { createStore, Store } from 'redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { initialState } from './initialState';
import { Action } from './Action';

type State = typeof initialState;
const store: Store<State, Action> = createStore((state = initialState) => {
  return state;
});

export const useChunkState = <T>(selectChunkState: (state: State) => T) => {
  const [chunkState, setChunkState] = useState<T>(selectChunkState(store.getState()));

  useEffect(() => store.subscribe(() => {
    const chunkStateCurrent = selectChunkState(store.getState());

    if (chunkStateCurrent !== chunkState) {
      setChunkState(chunkStateCurrent);
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

  // Component Login
}
