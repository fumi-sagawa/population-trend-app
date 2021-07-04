import { atom } from 'recoil';
import { Prefecture } from '../interfaces/Prefecture';

export const prefacturesState = atom<Prefecture[]>({
  key: 'prefectures',
  default: [
    {
      prefCode: 13,
      prefName: '東京都',
      selected: true,
    },
  ],
});
