import React from 'react';
//store
import { useRecoilValue } from 'recoil';
import { populationState } from '../atoms/PopulationAtom';
//types
import { Population } from '../interfaces/Population';
//グラフ描画
import { graphOption } from '../utils/samplePopulationData4charjs';
import { css } from '@emotion/react';
import { Line } from 'react-chartjs-2';
import { colors, chartDataHolder } from '../utils/chartVariables';

export const Chart: React.VFC = () => {
  //chart.jsの仕様に合わせるデータホルダ
  const dataHolder = chartDataHolder;

  //人口データ
  const population: Population[] = useRecoilValue(populationState);
  console.log(population);
  const populationDataset = population.map((population, index) => {
    return {
      data: population.populationTrend,
      label: population.prefName,
      borderColor: colors[index],
      backgroundColor: colors[index],
    };
  });

  dataHolder.datasets = populationDataset;

  return (
    <article css={container}>
      <Line
        data={dataHolder}
        options={graphOption}
        type="line"
        // 再レンダリングのワークアラウンド
        key={Math.random()}
      />
      <div></div>
    </article>
  );
};

const container = css`
  //recharts,chartjsなど
  //canvasで描画される要素を親レイアウトに合わせるためのワークアラウンド
  width: 99%;
`;
