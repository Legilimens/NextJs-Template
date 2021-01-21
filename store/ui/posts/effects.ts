import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import posts from 'network/posts';
import { fetchPostsAction } from 'store/ui/posts/actions';

export function* fetchPostsSaga() {
  try {
    const postsList = yield call([posts, posts.fetchPosts]);
    yield put(fetchPostsAction.success(postsList));
  } catch (error) {
    yield put(fetchPostsAction.failure(error));
    yield call(notification.error, { message: error.message });
  }
}

export function* watchUiPosts() {
  yield takeLatest(fetchPostsAction.request, fetchPostsSaga);
}
