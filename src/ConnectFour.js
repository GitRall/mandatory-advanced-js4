import React, { useState, useEffect } from 'react';
import Board from './Board';
import Winner from './Winner';


const ConnectFour = (props) => {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)));
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    checkIfWinner();
  })

  function checkIfWinner(){
    /* --- Check rows --- */
    for(let i = 1; i <= 2; i++){
      board.forEach((row) => {
        for(let col = 0; col < row.length - 3; col++){
          if(row[col] === i && row[col + 1] === i && row[col + 2] === i && row[col + 3] === i){
            i === 1 ? setWinner('Player one wins') : setWinner('Player two wins');
          }
        }
      })
      /* --- Check columns --- */
      for(let col = 0; col < board[0].length; col++){
        for(let row = 0; row < board.length - 3; row++){
          if(board[row][col] === i && board[row + 1][col] === i && board[row + 2][col] === i && board[row + 3][col] === i){
            i === 1 ? setWinner('Player one wins') : setWinner('Player two wins');
          }
        }
      }
      for(let row = 0; row <= board.length - 4; row++){
        /* --- Check diagonal top left to bottom right --- */
        for(let col = 0; col <= board[0].length - 4; col++){
          if(board[row][col] === i && board[row + 1][col + 1] === i && board[row + 2][col + 2] === i && board[row + 3][col + 3] === i){
            i === 1 ? setWinner('Player one wins') : setWinner('Player two wins');
          }
        }
        /* --- Check diagonal top right to bottom left --- */
        for(let col = board[0].length - 1; col >= 3; col--){
          if(board[row][col] === i && board[row + 1][col - 1] === i && board[row + 2][col - 2] === i && board[row + 3][col - 3] === i){
            i === 1 ? setWinner('Player one wins') : setWinner('Player two wins');
          }
        }
      }
    }
  }

  function onColumnClick(col){
    const boardCopy = [...board];

    for(let i = boardCopy.length - 1; i >= 0; i--){
      if(!boardCopy[i][col]){
        let rowCopy = [...boardCopy[i]];
        playerOneTurn ? (rowCopy[col] = 1) : rowCopy[col] = 2;
        boardCopy[i] = rowCopy;

        setPlayerOneTurn(!playerOneTurn);
        setBoard(boardCopy);
        return;
      }
    }
  }

  return(
    <>
      { winner ? <Winner currentWinner={winner}/> : null}
      <Board board={board} onColumnClick={onColumnClick} winner={winner}/>
    </>
  )
}

export default ConnectFour;
