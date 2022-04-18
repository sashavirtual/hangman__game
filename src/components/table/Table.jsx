import React, { useState } from 'react'
import Word from '../word/Word'
import Hungman from '../hungman/Hungman'
import './table.css'
function Table({ IL, setIL, setHangPic, hangPic, word, setWord }) {

    return (
        <div className='hangman__table'>
            <Hungman hangPic={hangPic} word={word} setWord={setWord} />
            <div className='hangman__table-word'>
                <Word hangPic={hangPic} setHangPic={setHangPic} setIL={setIL} IL={IL} word={word} />
                {hangPic >= 5 ?
                    (<div className="hangman__table-youLost"> {word}</div>) : (<div className="hangman__table-youWon">{word.split('').every(item => IL.includes(item)) ? 'YOU WON' : ""}</div>)}
            </div>
        </div>
    )
}

export default Table