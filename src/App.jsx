import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [board , setboard] = useState(Array(9).fill(null))
  const[isX , setX] = useState(true);
  const[winner , setWinner] = useState(null);


  const handleClick = (index) => {
    if(board[index]  != null ) return ;

    const newboard = [...board];
    newboard[index] = isX ? 'X' : 'O' ;
    setboard(newboard);
    setX(!isX);
    const winComb = checkWinner(newboard);
    if(winComb) {
      setWinner(winComb);
    }
    
  }

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
  
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a]; // returns "X" or "O"
      }
    }
    return null;
  };
  
    
    return (
    <>
      <div >
        <button onClick={()=>handleClick(0)}>  {board[0]} </button>
        <button onClick={()=>handleClick(1)}>  {board[1]} </button>
        <button onClick={()=>handleClick(2)}>  {board[2]} </button>

      </div>  
      <div>
        <button onClick={()=>handleClick(3)}>  {board[3]} </button>
        <button onClick={()=>handleClick(4)}>  {board[4]} </button>
        <button onClick={()=>handleClick(5)}>  {board[5]} </button>

      </div>
      <div>
        <button onClick={()=>handleClick(6)}>  {board[6]} </button>
        <button onClick={()=>handleClick(7)}>  {board[7]} </button>
        <button onClick={()=>handleClick(8)}>  {board[8]} </button>

      </div>
      
        {winner && <div>Winner is : {winner}</div>}
      
    </>
  )
}

export default App
