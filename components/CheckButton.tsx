import React from 'react';
import axios from 'axios';
import { css } from '@emotion/react';
import { cssColor, querySelector } from '../utils/cssVariables';
//store
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';
import { prefacturesState } from '../atoms/PrefectureAtom';
import { populationState } from '../atoms/PopulationAtom';
//types
import { Prefecture } from '../interfaces/Prefecture';
import { Population } from '../interfaces/Population';

type Props = {
  item: Prefecture;
};

export const CheckButton: React.VFC<Props> = ({ item }) => {
  //ストア定義
  //都道府県データ
  const prefectures: Prefecture[] = useRecoilValue(prefacturesState);
  const setPrefectures: SetterOrUpdater<Prefecture[]> =
    useSetRecoilState(prefacturesState);
  //人口データ
  const population: Population[] = useRecoilValue(populationState);
  const setPopulation: SetterOrUpdater<Population[]> =
    useSetRecoilState(populationState);

  //県データのリスト(prefectures)と親から得た県データを照合しindexを取得
  const index = prefectures.findIndex((listItem) => listItem === item);

  //setter関数
  //RecoilのあたいはReadOnlyであるため新しい配列を返す
  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  //トグル用関数。上記のsetterを呼び出し新しい値を格納する
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(prefectures, index, {
      ...item,
      selected: !item.selected,
    });
    setPrefectures(newList);
  };

  //データ取得,削除用関数。
  const replacePopulationData = () => {
    if (item.selected === false) {
      //useSWRに置き換えられる可能性あり！！
      //もしくはフラグ管理でキャッシュの戦略を取る
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
        (data) => data.prefCode !== item.prefCode,
      );
      setPopulation(newPopulationDatas);
    }
  };

  //発火用関数
  const onChange = async () => {
    await toggleItemCompletion();
    await replacePopulationData();
  };

  return (
    <>
      <div css={item.selected ? selectedCheckButton : checkButton}>
        <label>
          <input type="checkbox" checked={item.selected} onChange={onChange} />
          {item.prefName}
        </label>
      </div>
    </>
  );
};

const checkButtonBase = css`
  label {
    font-size: 16px;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 999px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
    //親要素で大きさを指定
    width: 100%;
    height: 100%;
    //文字中央寄せ
    display: grid;
    align-items: center;
    justify-items: center;
    @media (${querySelector.pc}) {
      font-size: 17px;
    }
  }
  input {
    display: none;
  }
`;

const checkButton = css`
  /* ベースボタンを継承 */
  ${checkButtonBase}
  label {
    color: ${cssColor.mainColor};
    background-color: ${cssColor.subColor};
  }
`;

const selectedCheckButton = css`
  /* ベースボタンを継承 */
  ${checkButtonBase}
  label {
    color: ${cssColor.subColor};
    background-color: ${cssColor.mainColor};
    box-shadow: rgba(99, 99, 99, 0.2) 10px 6px 8px 0px inset;
  }
`;
