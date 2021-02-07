import { combineReducers } from "redux";
import { RootState } from "../state";
import { convertingReducer } from "./converting";
import { uploadingReducer } from "./uploading";

export const rootReducer = combineReducers<RootState>({
  converting: convertingReducer,
  uploading: uploadingReducer,
});
