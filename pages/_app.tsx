import type { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/fontstyle.css';
import { Layout } from '../components/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
