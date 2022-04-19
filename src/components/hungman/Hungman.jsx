import React from 'react'
import { hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6 } from './imports'
import './hungman.css'
const arr = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6]
function Hungman({ word, setWord, hangPic }) {
    return (
        <div className='hangman__table-hungman'>
            <img className='hangman__table-hungman_image' src={hangPic > 6 ? arr[6] : arr[hangPic]} />
        </div>
    )
}

export default Hungman