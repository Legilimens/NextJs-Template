import { createSelector } from 'reselect';
import { TState } from 'store/i';

export const getPosts = (state: TState) => state.ui.posts;

export const getPostsData = createSelector(
  getPosts,
  ({ data }) => data,
);

export const getIsPostsLoading = createSelector(
  getPosts,
  ({ loading }) => loading,
);

export const getPostsError = createSelector(
  getPosts,
  ({ error }) => error,
);
