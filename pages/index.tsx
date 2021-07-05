import React from 'react';
import { ButtonGrid } from '../components/ButtonGrid';
import { Chart } from '../components/Chart';
import { css } from '@emotion/react';
import { querySelector } from '../utils/cssVariables';
//SWR
import useSWR from 'swr';
import { fetcher } from '../hooks/useFetcher';
//store
import { useSetRecoilState, SetterOrUpdater } from 'recoil';
import { prefacturesState } from '../atoms/PrefectureAtom';
//types
import { Prefecture } from '../interfaces/Prefecture';

const IndexPage: React.VFC = () => {
  //都道府県データ
  const setPrefecture: SetterOrUpdater<boolean | Prefecture[]> =
    useSetRecoilState(prefacturesState);

  //Next.js API Routesを叩いてサーバー側から値を取得
  //(API Routesは環境変数使用によるセキュリティ向上のため)
  const { data, error }: any = useSWR('/api/prefectures', fetcher, {
    revalidateOnFocus: false,
  });

  //useSWRを用いた値の出し分け
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data) {
    //取得成功時に値をセット,初期化
    const prefectureData = data.map((prefecture) => {
      return { ...prefecture, selected: false };
    });
    setPrefecture(prefectureData);
  }

  return (
    <>
      <div css={pageLayout}>
        <Chart />
        <ButtonGrid />
      </div>
    </>
  );
};

const pageLayout = css`
  display: grid;
  grid-template-rows: 300px auto;
  row-gap: 40px;
  @media (${querySelector.pc}) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: none;
    column-gap: 60px;
  }
  padding-bottom: 100px;
`;

export default IndexPage;
