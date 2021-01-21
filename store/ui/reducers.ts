import { combineReducers } from 'redux';

import dadataReducer from 'store/ui/dadata/reducers';
import postsReducer from 'store/ui/posts/reducers';

const uiReducers = {
  dadata: dadataReducer,
  posts: postsReducer,
};

const uiReducer = combineReducers(uiReducers);
export default uiReducer;
