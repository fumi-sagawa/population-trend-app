import React from 'react';
//store
import { useRecoilValue } from 'recoil';
import { populationState } from '../atoms/PopulationAtom';
//types
import { Population } from '../interfaces/Population';
//グラフ描画
import {
  sampleRechartsPopulationsData4chartjs,
  graphOption,
} from '../utils/samplePopulationData4charjs';
import { css } from '@emotion/react';
import { Line } from 'react-chartjs-2';

export const Chart: React.VFC = () => {
  //人口データ
  const population: Population[] = useRecoilValue(populationState);
  return (
    <article css={container}>
      <Line
        data={sampleRechartsPopulationsData4chartjs}
        options={graphOption}
        type="line"
      />
      <div>
        {population.map((params) => (
          <div key={params.prefCode}>
            {params.prefName}
            {params.populationTrend}
          </div>
        ))}
      </div>
    </article>
  );
};

const container = css`
  //recharts,chartjsなど
  //canvasで描画される要素を親レイアウトに合わせるためのワークアラウンド
  width: 99%;
`;
