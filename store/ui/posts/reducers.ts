import { HYDRATE } from 'next-redux-wrapper';
import { createReducer, getType } from 'typesafe-actions';

import { TUiPosts } from 'store/ui/posts/entities';
import { fetchPostsAction } from 'store/ui/posts/actions';
import { TState } from 'store/i';

const initialState: TUiPosts = {
  data: [],
  error: null,
  loading: false,
};

const postReducer = createReducer<TUiPosts>(initialState, {
  [HYDRATE]: (state, { payload }: { payload: TState} ) => {
    return {
      ...state,
      ...payload.ui.posts,
    };
  },
  [getType(fetchPostsAction.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(fetchPostsAction.success)]: (state, { payload }) => ({
    ...state,
    data: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchPostsAction.failure)]: (state, { payload }) => ({
    ...state,
    data: [],
    error: payload,
    loading: false,
  }),

});

export default postReducer;
