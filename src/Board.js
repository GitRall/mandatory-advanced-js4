import React from 'react';

let currentId = 0;
function generateId(){
  return currentId++;
}

function getColor(n){
  if(n === 1){
    return '#F57C00';
  }
  else if(n === 2){
    return '#2196F3';
  }
}

const Board = (props) => {
  const boardGrid = props.board.map((row) => {
    let itemArr = row.map((item, idx) => {
      if(!props.winner) {
        return <td className='board__item' key={generateId()} onClick={() => props.onColumnClick(idx)}><span style={{backgroundColor: getColor(item)}} className='board__item-circle'></span></td>
      }
      else {
        return <td className='board__item' key={generateId()}><span style={{backgroundColor: getColor(item)}} className='board__item-circle'></span></td>
      }
    })
    return (
      <tr key={generateId()}>
        {itemArr}
      </tr>
    )
  })

  return(
    <table className='board__table'>
      <tbody>
        {boardGrid}
      </tbody>
    </table>
  )
}

export default Board;
