import React from 'react';
import { css } from '@emotion/react';
import { cssColor, querySelector } from '../utils/cssVariables';

const selected = false;

export const CheckButton: React.VFC = () => {
  return (
    <>
      <div css={selected ? selectedCheckButton : checkButton}>
        <label>
          <input type="checkbox" value="東京都" />
          東京都
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
    box-shadow: none;
  }
`;
