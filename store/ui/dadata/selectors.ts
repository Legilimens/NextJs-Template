import { TState } from 'store/i';

export const getDadataAddresses = (state: TState) => state.ui.dadata.response;
export const getDadataLoading = (state: TState) => state.ui.dadata.loading;
export const getDadataError = (state: TState) => state.ui.dadata.error;
