import React, {useState} from 'react';
import Board from './Board';
import '../../App.css'

function Connect4(){


    const [currentPlayer, setCurrentPlayer] = useState(0);
    return (
        <div className='container'>
            <h1 className="projectHeading">Connect4</h1>
                <Board currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
        </div>
    )
}
export default Connect4;