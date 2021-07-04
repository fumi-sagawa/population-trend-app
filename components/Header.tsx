import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';
import { querySelector } from '../utils/cssVariables';

export const Header: React.VFC = () => {
  return (
    <header css={header}>
      <h1>
        <div>
          <Image
            src="/images/logo_.svg"
            alt="都道府県別人口推移グラフ"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </h1>
    </header>
  );
};

const header = css`
  //中央よせ
  display: grid;
  justify-items: center;
  align-items: center;
  @media (${querySelector.pc}) {
    justify-items: start;
  }
  div {
    //next/imageの仕様のためrelative付与
    position: relative;
    width: 219px;
    height: 57px;
    @media (${querySelector.pc}) {
      width: 354px;
      height: 90px;
    }
  }
`;
