import React from 'react'
import MyButton from './MyButton'
import './keyboardRow.css'
function KeyboardRow({ rowID, btnRow, toggleLanguage, IL, setIL, setHangPic, hangPic, word, setWord }) {

    return (
        <div className='hangman__keyboard-keyboard_row'>

            {btnRow.map((item, index) => <MyButton toggleLanguage={toggleLanguage} word={word} setWord={setWord} hangPic={hangPic} setHangPic={setHangPic} IL={IL} setIL={setIL} letter={item} keyID={'' + rowID + index} key={'button' + rowID + index} />)}
        </div>
    )
}

export default KeyboardRow