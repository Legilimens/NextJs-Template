import { all } from 'redux-saga/effects';

import { watchUiDadata } from 'store/ui/dadata/effects';
import { watchUiPosts } from 'store/ui/posts/effects';

export function* watchUi() {
  yield all([
    watchUiDadata(),
    watchUiPosts(),
  ]);
}
