import React from 'react';
import {
  sampleRechartsPopulationsData4chartjs,
  graphOption,
} from '../utils/samplePopulationData4charjs';
import { css } from '@emotion/react';
import { Line } from 'react-chartjs-2';

export const Chart: React.VFC = () => {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <article css={container}>
      <Line
        data={sampleRechartsPopulationsData4chartjs}
        options={graphOption}
        type="line"
      />
    </article>
  );
};

const container = css`
  //recharts,chartjsなど
  //canvasで描画される要素を親レイアウトに合わせるためのワークアラウンド
  width: 99%;
`;
