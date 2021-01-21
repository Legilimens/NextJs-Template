import { combineReducers } from 'redux';
import uiReducer from 'store/ui/reducers';

const reducers = {
  ui: uiReducer,
};
export const reducer = combineReducers(reducers);
