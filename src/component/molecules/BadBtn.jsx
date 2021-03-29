import React from 'react';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { CountBtn } from '../atoms';

/**
 * @summary BADボタン コンポーネント
 */
const BadBtn = () => {
  return (
    <CountBtn 
      id="bad_btn"
      label="bad"
      icon={ThumbDownOutlinedIcon}
    />
  )
}

export default BadBtn;