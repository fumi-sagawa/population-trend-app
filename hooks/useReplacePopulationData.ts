import axios from 'axios';
//store
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';
import { populationState } from '../atoms/PopulationAtom';
//types
import { Prefecture } from '../interfaces/Prefecture';
import { Population } from '../interfaces/Population';

export const useReplacePopulationData = (item: Prefecture): (() => void) => {
  //人口データ
  const population: Population[] = useRecoilValue(populationState);
  const setPopulation: SetterOrUpdater<Population[]> =
    useSetRecoilState(populationState);

  //データ取得,削除用関数。
  const replacePopulationData = () => {
    if (item.selected === false) {
      axios
        .get<Array<number>>(`api/population/${item.prefCode}`)
        .then((res) => {
          const newPopulationData: Population = {
            prefCode: item.prefCode,
            prefName: item.prefName,
            populationTrend: res.data,
          };
          setPopulation([...population, newPopulationData]);
        });
    } else {
      const newPopulationDatas = population.filter(
        //選択されたデータ以外のデータを人口stateに渡す
        (data) => data.prefCode !== item.prefCode,
      );
      setPopulation(newPopulationDatas);
    }
  };

  return replacePopulationData;
};
