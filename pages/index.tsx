import React from 'react';
import { CheckButton } from '../components/CheckButton';
import { Chart } from '../components/Chart';
import { css } from '@emotion/react';
import { cssColor, querySelector } from '../utils/cssVariables';

const IndexPage: React.VFC = () => {
  return (
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
};

const pageLayout = css`
  display: grid;
  row-gap: 40px;
  @media (${querySelector.pc}) {
    grid-template-columns: 2fr 1fr;
    column-gap: 60px;
  }
`;

const optionsLayout = css`
  display: grid;
  row-gap: 20px;
  @media (${querySelector.pc}) {
    align-content: start;
  }
`;

const optionsTitle = css`
  font-size: 16px;
  font-weight: 600;
  color: ${cssColor.mainColor};
  @media (${querySelector.pc}) {
    font-size: 18px;
  }
`;

const buttonGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 12px;
  row-gap: 12px;
  @media (${querySelector.pc}) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    grid-auto-rows: 40px;
  }
`;

export default IndexPage;
