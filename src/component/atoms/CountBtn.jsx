import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';

/**
 * @summary カウントボタン コンポーネント
 */
const CountBtn = (props) => {

  /**
   * @summary state hook
   * @details 状態管理をする @n
   * メンバー変数を定義して、その値を書き換える関数を定義するみたいなとこ
   */
  const [count, counter] = useState(0);
  const countUp = () => {
    counter(count + 1)
  }

  /**
   * @summary effect hook
   * @details ライフサイクルを管理する @n
   * コンストラクタ, 更新, デストラクタで行う処理を定義するみたいなとこ
   * @attention デストラクタは毎回走る
   */
  useEffect(() => {
    const el = document.getElementById(props.id);
    el.addEventListener('click', countUp);
    return () => {
      el.removeEventListener('click', countUp)
    }
  });

  const Icon = props.icon;
  return (
    <IconButton id={props.id} aria-label={props.label}>
      <Icon />
      {count}
    </IconButton>
  )
}

export default CountBtn;