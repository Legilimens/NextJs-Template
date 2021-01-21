export type TDadataAddressData = {
  geo_lat: string;
  geo_lon: string;
  qc_geo: string;
};

export type TDadataAddress = {
  data: TDadataAddressData;
  unrestricted_value: string;
  value: string;
};

export type TUiDadata = {
  response: TDadataAddress[];
  error: Error | null;
  loading: boolean;
};

export type TDadataResponse = {
  suggestions: TDadataAddress[];
};
