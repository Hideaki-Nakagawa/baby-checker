import React, { useState, useEffect } from 'react';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { IconButton } from '@material-ui/core';

/**
 * GOODボタン コンポーネント
 */
const GoodBtn = (props) => {

  /**
   * @name state hook
   * @details 状態管理をする @n
   * メンバー変数を定義して、その値を書き換える関数を定義するみたいなとこ
   */
  const [count, counter] = useState(0);
  const countUp = () => {
    counter(count + 1)
  }

  /**
   * @name effect hook
   * @details ライフサイクルを管理する @n
   * コンストラクタ, 更新, デストラクタで行う処理を定義するみたいなとこ
   * @attention デストラクタは毎回走る
   */
  useEffect(() => {
    const el = document.getElementById('good_btn');
    el.addEventListener('click', countUp);
    return () => {
      el.removeEventListener('click', countUp)
    }
  });

  return (
    <IconButton id={"good_btn"} color="primary" aria-label="good">
      <ThumbUpOutlinedIcon />
      {count}
    </IconButton>
  )
}

export default GoodBtn;