import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Layout } from '../components/Layout';
import '../styles/reset.css';
import '../styles/fontstyle.css';
import useSWR from 'swr';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  //API Routes用のフェッチャ
  const fetcher = (url) => fetch(url).then((res) => res.json());
  //Next.js API Routesを叩いてサーバー側から値を取得
  //環境変数使用のため
  const { data, error } = useSWR('/api/prefectures', fetcher);
  console.log(data, error);

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
