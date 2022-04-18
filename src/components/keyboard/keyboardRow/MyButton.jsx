import React, { useState } from 'react'
import './myButton.css'
function MyButton({ letter, IL, setIL, setHangPic, hangPic, word, setWord }) {

    const handleClick = (letter) => {
        let lt = [...arguments][0]['letter']
        let btnClass = word.includes(lt) ? 'right' : 'wrong'
        let tempID = 'btn' + lt
        document.getElementById(tempID).classList.add(btnClass)
        document.getElementById(tempID).disabled = true
        let tempCount = hangPic
        if (btnClass === 'wrong') {
            setHangPic(prev => prev += 1)
            tempCount = hangPic + 1
        };
        setIL(prev => [...prev, lt])
        let tempArr = [...IL, lt]
        if (tempCount >= 5 || word.split('').every(item => tempArr.includes(item))) {
            let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            alphabet.split('').map(id => {
                document.getElementById('btn' + id).disabled = true
            })
        }
    }
    return (
        <button id={"btn" + letter} className='myButton' onClick={(letter) => handleClick(letter)}>{letter}</button>
    )
}

export default MyButton