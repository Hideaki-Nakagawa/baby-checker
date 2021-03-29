import React from 'react';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { CountBtn } from '../atoms';

/**
 * @summary GOODボタン コンポーネント
 */
const GoodBtn = (props) => {
  return (
    <CountBtn 
      id="good_btn"
      label="good"
      icon={ThumbUpOutlinedIcon}
    />
  )
}

export default GoodBtn;