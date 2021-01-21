import { HYDRATE } from 'next-redux-wrapper';
import { createReducer, getType } from 'typesafe-actions';

import { TUiDadata } from 'store/ui/dadata/entities';
import { fetchDadataAddresses, fetchDadataAddressesDebounce } from 'store/ui/dadata/actions';
import { TState } from 'store/i';

const initialState: TUiDadata = {
  response: [],
  error: null,
  loading: false,
};

const dadataReducer = createReducer<TUiDadata>(initialState, {
  [HYDRATE]: (state, { payload }: { payload: TState} ) => {
    return {
      ...state,
      ...payload.ui.dadata,
    };
  },
  [getType(fetchDadataAddresses.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(fetchDadataAddresses.success)]: (state, { payload }) => ({
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchDadataAddresses.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
  // debounce
  [getType(fetchDadataAddressesDebounce.request)]: state => ({
    ...state,
    error: null,
    loading: true,
  }),
  [getType(fetchDadataAddressesDebounce.success)]: (state, { payload }) => ({
    ...state,
    response: payload,
    error: null,
    loading: false,
  }),
  [getType(fetchDadataAddressesDebounce.failure)]: (state, { payload }) => ({
    ...state,
    error: payload,
    loading: false,
  }),
});

export default dadataReducer;
