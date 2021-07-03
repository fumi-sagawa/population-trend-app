import { atom } from 'recoil';
import { Prefecture } from '../interfaces/Prefecture';

export const prefactureState = atom<Prefecture[]>({
  key: 'prefecture',
  default: [
    {
      prefCode: 13,
      prefName: '東京都',
      selected: false,
    },
  ],
});
