import React from 'react';
import { Header } from './Header';
import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div css={layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

const layout = css`
  background-color: #f7f7f7;
  min-height: 100vh;
  display: grid;
  //真ん中よせ
  grid-template-rows: 145px auto;
`;
