import React from 'react';
import { CheckButton } from '../components/CheckButton';
import { css } from '@emotion/react';
import { cssColor, querySelector } from '../utils/cssVariables';
//store
import { useRecoilValue } from 'recoil';
import { prefacturesState } from '../atoms/PrefectureAtom';
//types
import { Prefecture } from '../interfaces/Prefecture';

export const ButtonGrid: React.VFC = () => {
  const prefectures: Prefecture[] = useRecoilValue(prefacturesState);

  return (
    <div css={optionsLayout}>
      <p css={optionsTitle}>都道府県を選んでください</p>
      <ul css={buttonGrid}>
        {prefectures.map((prefecture) => (
          <CheckButton key={prefecture.prefCode} item={prefecture} />
        ))}
      </ul>
    </div>
  );
};

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
  grid-template-columns: repeat(3, 1fr);
  column-gap: 12px;
  row-gap: 12px;
  @media (${querySelector.pc}) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-auto-rows: 40px;
  }
`;
