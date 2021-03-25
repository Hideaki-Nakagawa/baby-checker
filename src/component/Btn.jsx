import React from 'react';

const Btn = (props) => {
  return(
    <button type="button" className={props.className} onClick={props.func} >{props.title}</button>
  )
}

export default Btn;