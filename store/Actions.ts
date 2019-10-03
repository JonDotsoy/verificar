import { initialState } from "./initialState";
import { DeepPartial } from "redux";

type IncAction = {
  type: 'inc';
  set: (state: typeof initialState) => typeof initialState | typeof initialState;
};

export type Actions = IncAction;
