import { combineReducers } from "redux";
import { RootState } from "../state";
import { convertingReducer } from "./converting";

export const rootReducer = combineReducers<RootState>({
  converting: convertingReducer,
});
