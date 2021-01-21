import Cookies from 'universal-cookie';

// Token
export const setTokenCookies = (token: any) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', expires });
};

export const getTokenCookies = () => {
  const cookies = new Cookies();
  return cookies.get('token');
};

export const removeTokenCookies = () => {
  const cookies = new Cookies();
  cookies.remove('token', { path: '/' });
};
