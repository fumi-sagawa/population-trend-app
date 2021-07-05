//store
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';
import { prefacturesState } from '../atoms/PrefectureAtom';
//types
import { Prefecture } from '../interfaces/Prefecture';

export const useToggleItem = (item: Prefecture): (() => void) => {
  //ストア定義
  //都道府県データ
  const prefectures: Prefecture[] = useRecoilValue(prefacturesState);
  const setPrefectures: SetterOrUpdater<Prefecture[]> =
    useSetRecoilState(prefacturesState);

  //県データのリスト(prefectures)と親から得た県データ(単数)を照合しindexを取得
  const index: number = prefectures.findIndex((listItem) => listItem === item);
  //setter関数
  //RecoilのあたいはReadOnlyであるため新しい配列を返す
  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  //トグル用関数。上記のsetterを呼び出し新しい値を格納する
  const toggleItem = () => {
    const newList = replaceItemAtIndex(prefectures, index, {
      ...item,
      selected: !item.selected,
    });
    setPrefectures(newList);
  };

  return toggleItem;
};
