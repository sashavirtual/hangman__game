import React from 'react'
import './word.css'

function Word({ word, IL, hangPic, setHangPic }) {
    const cens = (word, IL) => {
        let newWord = word.split('').map(item => IL.includes(item) ? item : '•').join('')
        return newWord
    }
    return (
        <div className="hangman__table-word">{cens(word, IL)}</div>
    )
}

export default Word