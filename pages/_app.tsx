import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Layout } from '../components/Layout';
import '../styles/reset.css';
import '../styles/fontstyle.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
