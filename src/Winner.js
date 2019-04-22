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
    <div className='overlay__winner'>
      <div className='overlay__winner-container'>
        <h1 className='overlay__winner-text' style={{color: getColor(props.currentWinner)}}>{props.currentWinner}</h1>
        <button className='overlay__reset-btn' onClick={props.resetGame}>Restart</button>
      </div>
    </div>
  )
}

export default Winner;
