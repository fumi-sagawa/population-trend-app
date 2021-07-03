import React from 'react';
import { Header } from './Header';
import { css } from '@emotion/react';
import { querySelector } from '../utils/cssVariables';

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
  grid-template-rows: 145px auto;
  //横幅確保
  padding: 0px 25px;
  @media (${querySelector.pc}) {
    grid-template-rows: 230px auto;
    padding: 0px 80px;
  }
`;
