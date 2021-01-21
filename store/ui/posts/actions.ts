import { TNetworkError } from 'network/Instance/errors';
import { createAsyncAction } from 'typesafe-actions';

export const POSTS_REQUEST = '@posts/POSTS_REQUEST';
export const POSTS_SUCCESS = '@posts/POSTS_SUCCESS';
export const POSTS_FAILURE = '@posts/POSTS_FAILURE';

export const fetchPostsAction = createAsyncAction(
  POSTS_REQUEST,
  [POSTS_SUCCESS, (suggestions: any) => suggestions],
  [POSTS_FAILURE, (error: TNetworkError) => error],
)();

