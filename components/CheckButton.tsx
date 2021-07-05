import React from 'react';
import { css } from '@emotion/react';
import { cssColor, querySelector } from '../utils/cssVariables';
//custom hooks
import { useReplacePopulationData } from '../hooks/useReplacePopulationData';
import { useToggleItem } from '../hooks/useToggleItem';
//types
import { Prefecture } from '../interfaces/Prefecture';

type Props = {
  item: Prefecture;
};

export const CheckButton: React.VFC<Props> = ({ item }) => {
  //カスタムフック
  //item(単数の県データ)とselectedに応じた人口データの追加と削除
  const replacePopulationData = useReplacePopulationData(item);
  //item(単数の県データ)とstoreを照合したselectedのトグル関数
  const toggleItem = useToggleItem(item);
  //発火用関数
  const onChange = () => {
    toggleItem();
    replacePopulationData();
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
