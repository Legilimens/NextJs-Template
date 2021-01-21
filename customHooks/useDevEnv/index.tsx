import { useEffect } from 'react';

const cacheURL: string[] = [];
const handleLoadStyle = (url: string) => {

  if (cacheURL.includes(url)) {
    return;
  }
  const styleLinks = document.querySelectorAll(
    'link[href*="/_next/static/css/styles.chunk.css"]'
  );
  const timestamp = new Date().valueOf();
  [...styleLinks].map( (link: any) => {
    if (link.rel === 'stylesheet') {
      link.href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
      cacheURL.push(url);
    }
  });
};
// Хук загружает файл со стилями при локальной разработке, чтобы не перезагружать страницу
const useDevEnv = (asPath, events) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    events.on('routeChangeComplete', handleLoadStyle);
    return () => {
      events.off('routeChangeComplete', handleLoadStyle);
    };
  }, [asPath]);
};

export default useDevEnv;
