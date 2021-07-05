import React from 'react';
import { querySelector } from '../utils/cssVariables';
//store
import { useRecoilValue } from 'recoil';
import { populationState } from '../atoms/PopulationAtom';
//types
import { Population } from '../interfaces/Population';
//グラフ描画
import { css } from '@emotion/react';
import { Line } from 'react-chartjs-2';
import { colors, chartDataHolder, graphOption } from '../utils/chartVariables';

export const Chart: React.VFC = () => {
  //chart.jsの仕様に合わせるデータホルダ
  const dataHolder = chartDataHolder;

  //人口データのstate
  const population: Population[] = useRecoilValue(populationState);
  //chart.jsのkey:datasetで使用するデータの作成
  const populationDataset = population.map((population, index) => {
    return {
      data: population.populationTrend,
      label: population.prefName,
      borderColor: colors[index],
      backgroundColor: colors[index],
    };
  });
  //描画用データのセット
  dataHolder.datasets = populationDataset;

  return (
    <article css={container}>
      <Line
        data={dataHolder}
        options={graphOption}
        type="line"
        // 再レンダリングのためのワークアラウンド
        key={Math.random()}
      />
      <div></div>
    </article>
  );
};

//chartjsを親レイアウトに合わせるためのワークアラウンド
const container = css`
  @media (${querySelector.pc}) {
    height: 60vh;
  }
  width: 99%;
`;
