import React, { useState } from 'react';
import Square from './Square';
import { array } from './array.js';

const Board = () => {
  const [count, setCount] = useState(1);
  const [arrayData, setArrayData] = useState(array);
  const [winner, setWinner] = useState('');
  const boardIdea = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  //   console.log(arrayData);
  return (
    <center>
      {boardIdea.map((moreInfo) => (
        <div key={moreInfo}>
          {moreInfo.map((lastInfo) => (
            <Square
              key={lastInfo}
              count={count}
              setCount={setCount}
              array={arrayData}
              setArray={setArrayData}
              info={arrayData.at(lastInfo - 1)}
              setWinner={setWinner}
              winner={winner}
            />
          ))}
        </div>
      ))}
      <div>{winner}</div>
    </center>
  );
};

export default Board;
