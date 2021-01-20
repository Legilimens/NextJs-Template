import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

import '@styles/antd-custom.less';
import '@styles/global.scss';

const WrappedApp = props => {

  return (
    <ConfigProvider locale={ruRU}>
      <props.Component {...props.pageProps} />
    </ConfigProvider>
  );
};

export default WrappedApp;
