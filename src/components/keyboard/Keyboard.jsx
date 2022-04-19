import React from 'react'
import KeyboardRow from './keyboardRow/KeyboardRow'
import './keyboard.css'
const buttons = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
]
function Keyboard({ IL, setIL, setHangPic, hangPic, word, setWord, toggleLanguage }) {
    const buttons = toggleLanguage === 'English' ? [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']]
        : [
            ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"],
            ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
            ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю"]]
    return (
        <div className='hangman__keyboard' disabled={true}>
            {buttons.map((item, i) => <KeyboardRow
                word={word}
                toggleLanguage={toggleLanguage}
                setWord={setWord}
                hangPic={hangPic}
                setHangPic={setHangPic}
                IL={IL}
                rowID={i}
                setIL={setIL}
                btnRow={item}
                key={'row' + (i + 1)} />)}

        </div>
    )
}

export default Keyboard