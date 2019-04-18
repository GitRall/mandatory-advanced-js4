import React from 'react';

function getColor(b){
  return b ? '#F57C00' : '#2196F3';
}
function getNumber(b){
  return b ? '1' : '2';
}

const Coin = (props) => {
  return (
    <div className='header__coin-wrapper'>
      <span style={{backgroundColor: getColor(props.playerOneTurn)}} className='board__item-circle'>P{getNumber(props.playerOneTurn)}</span>
    </div>
  )
}

export default Coin;
