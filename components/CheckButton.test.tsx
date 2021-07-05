/**
 * @jest-environment jsdom
 */

import { cleanup, render } from '@testing-library/react';
import { CheckButton } from './CheckButton';
import { RecoilRoot } from 'recoil';

const samplePrefecture = {
  prefCode: 13,
  prefName: '東京都',
  selected: false,
};

describe('<CheckButton />', () => {
  afterEach(() => {
    cleanup();
  });
  //スナップショット
  test('render', () => {
    const { asFragment } = render(
      //storeを使うためRecoilで挟む
      <RecoilRoot>
        <CheckButton item={samplePrefecture} />
      </RecoilRoot>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
