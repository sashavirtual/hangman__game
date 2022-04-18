import React from 'react'
import MyButton from './MyButton'
import './keyboardRow.css'
function KeyboardRow({ btnRow, IL, setIL, setHangPic, hangPic, word, setWord }) {

    return (
        <div className='hangman__keyboard-keyboard_row'>
            {btnRow.map(item => <MyButton word={word} setWord={setWord} hangPic={hangPic} setHangPic={setHangPic} IL={IL} setIL={setIL} letter={item} key={'button' + item} />)}
        </div>
    )
}

export default KeyboardRow