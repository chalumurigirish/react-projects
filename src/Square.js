import React from 'react';

const Square = ({
  count,
  setCount,
  array,
  setArray,
  info,
  setWinner,
  winner,
}) => {
  const handleClick = (id) => {
    // console.log(count);

    const updatedArray = array.map((info) => {
      const updateThis = count % 2 ? 'x' : 'o';
      if (info.id === id) return { ...info, [updateThis]: true };
      return info;
    });

    setArray(updatedArray);

    setCount((count) => count + 1);
    // console.log(updatedArray[0]);
    // console.log(info);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      console.log(a, b, c);

      if (updatedArray[a].o && updatedArray[b].o && updatedArray[c].o)
        setWinner('O is the winner');
      if (updatedArray[a].x && updatedArray[b].x && updatedArray[c].x)
        setWinner('X is the winner');
    }
  };

  return (
    <button
      onClick={() => handleClick(info.id)}
      disabled={
        info.x ||
        info.o ||
        winner === 'O is the winner' ||
        winner === 'X is the winner'
      }
    >
      {!info.x && !info.o ? `_` : `${info.x ? `x` : `o`}`}
    </button>
  );
};
export default Square;
