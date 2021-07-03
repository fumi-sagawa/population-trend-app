import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { css } from '@emotion/react';

const colorViolet = css`
  color: blueviolet;
`;
const colorBlue = css`
  color: blue;
`;
const flag = true;

const IndexPage: React.VFC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 css={flag ? colorViolet : colorBlue}>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
