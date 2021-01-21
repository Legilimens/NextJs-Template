import { all } from 'redux-saga/effects';
import { watchUi } from 'store/ui/effects';

export default function* rootSaga() {
  yield all([
    watchUi(),
  ]);
}
