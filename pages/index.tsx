import React from 'react';
import { CheckButton } from '../components/CheckButton';
import { Chart } from '../components/Chart';
import { css } from '@emotion/react';
import { cssColor } from '../utils/cssVariables';

const IndexPage: React.VFC = () => (
  <>
    <div css={pageLayout}>
      <Chart />
      <div css={optionsLayout}>
        <p css={optionsTitle}>都道府県を選んでください</p>
        <div css={buttonGrid}>
          <CheckButton />
          <CheckButton />
          <CheckButton />
          <CheckButton />
          <CheckButton />
        </div>
      </div>
    </div>
  </>
);

const pageLayout = css`
  display: grid;
  row-gap: 40px;
  grid-template-rows: 200px auto;
  //横幅確保
  padding: 0px 25px;
`;

const optionsLayout = css`
  display: grid;
  row-gap: 20px;
`;

const optionsTitle = css`
  font-size: 16px;
  font-weight: 600;
  color: ${cssColor.mainColor};
`;

const buttonGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 12px;
  row-gap: 12px;
`;

export default IndexPage;
