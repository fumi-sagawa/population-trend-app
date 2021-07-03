import React from 'react';
import { sampleRechartsPopulationsData } from '../utils/sample-data';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';

export const Chart: React.VFC = () => {
  return (
    <div>
      <ResponsiveContainer width="99%" aspect={2} height="100%">
        <LineChart
          data={sampleRechartsPopulationsData}
          margin={{ bottom: 10, left: 10, right: 10 }}
        >
          <XAxis dataKey="year" tick={{ fontSize: 12 }}>
            <Label
              value="年度"
              offset={-5}
              position="insideBottom"
              style={{ fontSize: '12px' }}
            />
          </XAxis>
          <YAxis tick={{ fontSize: 12 }}>
            <Label
              value="人口数"
              offset={-5}
              position="insideLeft"
              angle={-90}
              // css={label}
              style={{ fontSize: '12px' }}
            />
          </YAxis>
          <Line type="monotone" dataKey="北海道" stroke="#8884d8" />
          <Line type="monotone" dataKey="青森" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

import { css } from '@emotion/react';
