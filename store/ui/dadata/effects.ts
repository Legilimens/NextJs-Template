import { call, delay, put, takeLatest } from 'redux-saga/effects';
import dadata from 'network/dadata';
import { fetchDadataAddresses, fetchDadataAddressesDebounce } from './actions';

export function* fetchDadataAddressesSaga({ payload }) {
  try {
    const response = yield call([dadata, dadata.sendQuery], payload);
    yield put(fetchDadataAddresses.success(response.suggestions));
  } catch (error) {
    yield put(fetchDadataAddresses.failure(error));
  }
}

export function* fetchDadataAddressesDebounceSaga({ payload }) {
  try {
    const { time, findText } = payload;
    yield delay(time);
    const { suggestions } = yield call([dadata, dadata.sendQuery], findText);
    yield put(fetchDadataAddressesDebounce.success(suggestions));
  } catch (error) {
    yield put(fetchDadataAddressesDebounce.failure(error));
  }
}
export function* watchUiDadata() {
  yield takeLatest(fetchDadataAddresses.request, fetchDadataAddressesSaga);
  yield takeLatest(
    fetchDadataAddressesDebounce.request,
    fetchDadataAddressesDebounceSaga,
  );
}
