import React from 'react';

function getColor(winner){
  if(winner === 'Player one wins'){
    return '#F57C00';
  }
  else if(winner === 'Player two wins'){
    return '#2196F3';
  }
  else{
    return '#fff';
  }
}

const Winner = (props) => {
  return(
    <div className='header__winner-wrapper'>
      <h1 className='header__winner-text' style={{color: getColor(props.currentWinner)}}>{props.currentWinner}</h1>
    </div>
  )
}

export default Winner;
