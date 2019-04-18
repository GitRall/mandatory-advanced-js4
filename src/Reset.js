import React from 'react';

const Reset = (props) => {
  return (
    <div className='header__reset-wrapper'>
      <button className='header__reset-btn' onClick={props.resetGame}><i className="material-icons header__reset-icon">replay</i></button>
    </div>
  )
}

export default Reset;
