import { useRouter } from "next/router";
import { DefaultSeo, NextSeo } from 'next-seo';
import { ConfigProvider } from "antd";
import cookies from 'next-cookies';
import ruRU from "antd/lib/locale/ru_RU";

// import useDevEnv from 'customHooks/useDevEnv';
import { Paths, privatePages } from 'enums/routes';
import { seoConfig } from 'enums/seo';

import { wrapper } from 'store';

import "@styles/antd-custom.less";
import "@styles/global.scss";

const WrappedApp = (props) => {
  const { pathname, asPath, events } = useRouter();
  // useDevEnv(asPath, events);

  return (
    <ConfigProvider locale={ruRU}>
      {/* стандартный head, убирает дубликаты meta, либо идет как default */}
      {/* весь конфиг в seoConfig, кроме динамических head */}
      <DefaultSeo {...seoConfig.default} />
      {/* head от pathname */}
      <NextSeo {...seoConfig[pathname]} />
      <props.Component {...props.pageProps} />
    </ConfigProvider>
  );
};

WrappedApp.getInitialProps = async ({ ctx: { store, res, pathname }, ctx }) => {
  const { token } = cookies(ctx);
  const invalidUserRoute = !token && privatePages.includes(pathname as Paths);

  if (invalidUserRoute) {
    res.writeHead(302, { Location: Paths.home });
    res.end();
  }
};

export default wrapper.withRedux(WrappedApp);
