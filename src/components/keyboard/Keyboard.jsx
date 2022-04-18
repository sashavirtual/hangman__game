import React from 'react'
import KeyboardRow from './keyboardRow/KeyboardRow'
import './keyboard.css'
const buttons = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
function Keyboard({ IL, setIL, setHangPic, hangPic, word, setWord }) {
    // if (hangPic >= 5 || word.split('').every(item => tempArr.includes(item))) {
    //     return (<div></div>)
    // }
    return (
        <div className='hangman__keyboard' disabled={true}>
            {buttons.map((item, i) => <KeyboardRow
                word={word}
                setWord={setWord}
                hangPic={hangPic}
                setHangPic={setHangPic}
                IL={IL}
                setIL={setIL}
                btnRow={item}
                key={'row' + (i + 1)} />)}

        </div>
    )
}

export default Keyboard