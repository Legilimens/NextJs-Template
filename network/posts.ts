import getConfig from 'next/config';
import Instance, { TAxios } from './Instance';

class Posts extends Instance {
  constructor(baseURL: string, timeout = 30000) {
    super(baseURL, timeout);
  }

  async fetchPosts(): TAxios {
    return this.send('get', '/posts');
  }
}

const {
  publicRuntimeConfig: { NEXT_PUBLIC_POSTS_BACKEND_URL },
} = getConfig();

const posts = new Posts(NEXT_PUBLIC_POSTS_BACKEND_URL);
export default posts;
