import { populationTrend } from '../interfaces/types';

// prefCode=1,北海道, 2015年のサンプルデータ
export const samplePopulationData: populationTrend[] = [
  { year: 1960, value: 5039206 },
  { year: 1965, value: 5171800 },
  { year: 1970, value: 5184287 },
  { year: 1975, value: 5338206 },
  { year: 1980, value: 5575989 },
  { year: 1985, value: 5679439 },
  { year: 1990, value: 5643647 },
  { year: 1995, value: 5692321 },
  { year: 2000, value: 5683062 },
  { year: 2005, value: 5627737 },
  { year: 2010, value: 5506419 },
  { year: 2015, value: 5381733 },
  { year: 2020, value: 5216615 },
  { year: 2025, value: 5016554 },
  { year: 2030, value: 4791592 },
  { year: 2035, value: 4546357 },
  { year: 2040, value: 4280427 },
  { year: 2045, value: 4004973 },
];

// Rechartsに合わせたデータ
export const sampleRechartsPopulationsData: populationTrend[] = [
  { year: 1960, 北海道: 5039206, 青森: 1426606 },
  { year: 1965, 北海道: 5171800, 青森: 1416591 },
  { year: 1970, 北海道: 5184287, 青森: 1427520 },
  { year: 1975, 北海道: 5338206, 青森: 1468646 },
  { year: 1980, 北海道: 5575989, 青森: 1523907 },
  { year: 1985, 北海道: 5679439, 青森: 1524448 },
  { year: 1990, 北海道: 5643647, 青森: 1482873 },
  { year: 1995, 北海道: 5692321, 青森: 1481663 },
  { year: 2000, 北海道: 5683062, 青森: 1475728 },
  { year: 2005, 北海道: 5627737, 青森: 1436657 },
  { year: 2010, 北海道: 5506419, 青森: 1373339 },
  { year: 2015, 北海道: 5381733, 青森: 1308265 },
  { year: 2020, 北海道: 5216615, 青森: 1235971 },
  { year: 2025, 北海道: 5016554, 青森: 1157332 },
  { year: 2030, 北海道: 4791592, 青森: 1076393 },
  { year: 2035, 北海道: 4546357, 青森: 993737 },
  { year: 2040, 北海道: 4280427, 青森: 908974 },
  { year: 2045, 北海道: 4004973, 青森: 823610 },
];
