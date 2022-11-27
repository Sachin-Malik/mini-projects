import './Connect4.css'
import {useState} from 'react';
import {checkGame} from './util';
function Board({currentPlayer ,setCurrentPlayer}){
    
    const rows = 6;
    const cols = 7;
    const intialBoard = [];
    for(var i=0;i<rows;i++){
        const col =[];
        for(var j=0;j<cols;j++){
            col.push('');
        }
        intialBoard.push(col);
    }

    const intialTopRow = [];
    for(var i=0;i<cols;i++){
        intialTopRow.push('');
    }

    const [board, setBoard] = useState(intialBoard);
    const [topRow, setTopRow] = useState(intialTopRow);
    const [haveWinner, setHaveWinner] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    

    const playerToColorMapping = ['red','blue'];
    
    const handleMouseOver = (i) => {
        const newTopRow = [...topRow];
        newTopRow[i]=playerToColorMapping[currentPlayer];
        setTopRow(newTopRow);
    }

    const handleMouseLeave = (i) => {
        const newTopRow = [...topRow];
        newTopRow[i]='#ffffff';
        setTopRow(newTopRow);
    }

    const handleResetGame = () => {
        setBoard(intialBoard);
        setCurrentPlayer(0);
        setTopRow(intialBoard);
        setHaveWinner(false);
        setGameStarted(false);
    }

    const handlePlayerMove = (colNumber) => {
        console.log(board);
        console.log(colNumber);
        setGameStarted(true);
        const newBoard = [...board];
        //find the we a tile can be placed in this col.
      
        if(newBoard[0][colNumber]===''){
            for(var i = rows-1;i>=0;i--){
                if(newBoard[i][colNumber]===''){
                    newBoard[i][colNumber]=playerToColorMapping[currentPlayer];
                    break;
                }
            }
            if(currentPlayer===0) setCurrentPlayer(1);
            else setCurrentPlayer(0);
            setBoard(newBoard);

            //See if we have a winner or not.
            const gameOver = checkGame(board);
            if(gameOver) {
                setHaveWinner(true);
            }
        }else{
           handleMouseLeave(colNumber);
        }      
    }

    return (
           <>
            <div className="headerRow">
            {
            intialTopRow.map((e, i) => {
                return <div onMouseOver={()=>handleMouseOver(i)} onMouseLeave={()=>handleMouseLeave(i)} onClick={()=>handlePlayerMove(i)}  className="gridButton headerRowCells" style={{backgroundColor:`${topRow[i]}`}}></div>
            })
            }
            </div>
            <div className='boardParent'>
                <div className='winnerDialog' style={{display:!haveWinner?'none':''}}>
                    <p>Player {playerToColorMapping[currentPlayer]} Lose</p>
                    <button className='playAgainButton' onClick={handleResetGame}>Play Again</button>
                </div>
                <div className='boardContainer'>
                {
                intialBoard.map((row,i)=>{
                    return <div>
                        {
                            row.map((cell,j)=>{
                               return <div style={{background:`${board[i][j]}`}} className="gridButton boardCell">{intialBoard[i][j]}</div>
                            })
                        }
                        <br/>
                    </div>
                })
                }
                </div>
            </div>
            <button style={{margin:'20px',padding:'10px',display:!gameStarted?'none':''}} onClick={handleResetGame}>Reset</button>
            </>
          
       
      
    )
}

export default Board;