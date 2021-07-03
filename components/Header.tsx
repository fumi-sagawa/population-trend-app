import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/react';

export const Header: React.VFC = () => {
  return (
    <header css={header}>
      <h1>
        <Image
          src="/images/logo.svg"
          alt="都道府県別人口推移グラフ"
          height={57}
          width={219}
        />
      </h1>
    </header>
  );
};

const header = css`
  //中央よせ
  display: grid;
  justify-items: center;
  align-items: center;
`;
