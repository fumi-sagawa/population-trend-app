import React from 'react';
import { css } from '@emotion/react';
import { cssColor } from '../utils/cssVariables';

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

const checkButton = css`
  label {
    font-size: 16px;
    font-weight: 600;
    color: ${cssColor.mainColor};
    padding: 6px 12px;
    border-radius: 999px;
    background-color: ${cssColor.subColor};
    cursor: pointer;
    //文字中央寄せ
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  input {
    display: none;
  }
`;

const selectedCheckButton = css`
  label {
    font-size: 16px;
    font-weight: 600;
    color: ${cssColor.subColor};
    padding: 6px 12px;
    border-radius: 999px;
    background-color: ${cssColor.mainColor};
    cursor: pointer;
    //文字中央寄せ
    display: grid;
    align-items: center;
    justify-items: center;
    box-shadow: none;
  }

  input {
    display: none;
  }
`;
