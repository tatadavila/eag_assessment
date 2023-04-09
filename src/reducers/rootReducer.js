// @modules
import { combineReducers } from "redux";

// @slices
import { dataSlice, uiSlice } from "../slices";

export const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});
