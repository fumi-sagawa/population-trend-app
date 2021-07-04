import { atom } from 'recoil';
import { Population } from '../interfaces/Population';

export const populationState = atom<Population[]>({
  key: 'populations',
  default: [],
});
