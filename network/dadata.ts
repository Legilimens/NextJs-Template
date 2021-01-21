import getConfig from "next/config";
import Instance, { TAxios } from "network/Instance";

const {
  publicRuntimeConfig: { DADATA_API_TOKEN },
} = getConfig();

const API_TOKEN = `Token ${DADATA_API_TOKEN}`;

class Dadata extends Instance {
  constructor(baseURL: string, timeout = 10000) {
    super(baseURL, timeout);
  }

  /* POSTS */
  async sendQuery(query): TAxios {
    return this.setToken(API_TOKEN, true).send(
      "post",
      "/suggestions/api/4_1/rs/suggest/address",
      {
        query: `${query}`,
        locations_boost: [
          {
            kladr_id: "52",
          },
        ],
      }
    );
  }
}

const baseUrl = "https://suggestions.dadata.ru/";
const dadata = new Dadata(baseUrl);
export default dadata;
