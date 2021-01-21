import { TNetworkError } from 'network/Instance/errors';
import { createAsyncAction } from 'typesafe-actions';
import { TDadataResponse } from './entities';

export const DADATA_REQUEST = '@dadata/DADATA_REQUEST';
export const DADATA_SUCCESS = '@dadata/DADATA_SUCCESS';
export const DADATA_FAILURE = '@dadata/DADATA_FAILURE';

export const DADATA_DEBOUNCE_REQUEST = '@dadata/DADATA_DEBOUNCE_REQUEST';
export const DADATA_DEBOUNCE_SUCCESS = '@dadata/DADATA_DEBOUNCE_SUCCESS';
export const DADATA_DEBOUNCE_FAILURE = '@dadata/DADATA_DEBOUNCE_FAILURE';

export const fetchDadataAddresses = createAsyncAction(
  [DADATA_REQUEST, (query: string) => query],
  [DADATA_SUCCESS, (suggestions: TDadataResponse) => suggestions],
  [DADATA_FAILURE, (error: any) => error],
)();

export const fetchDadataAddressesDebounce = createAsyncAction(
  DADATA_DEBOUNCE_REQUEST,
  DADATA_DEBOUNCE_SUCCESS,
  DADATA_DEBOUNCE_FAILURE,
)<{ time: number; findText: string }, TDadataResponse, TNetworkError>();
