import React, { useEffect, useRef, useState } from 'react'
import Word from '../word/Word'
import Hungman from '../hungman/Hungman'
import './table.css'
const cathRus = {
    'Random': "Случайное слово",
    'Animals': "Животные",
    'Countries': "Страны",
    'Difficult': "Сложные слова",
    'Sports': "Виды спорта"
}
let cathegoryArr = ['Animals', 'Sports', 'Countries', 'Difficult', 'Random']
function Table({ IL, setIL, setHangPic, hangPic, word, setWord, chosen, setChosen, playAgain, toggleLanguage, setToggleLanguage }) {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleCathegory, setToggleCathegory] = useState(false)
    const newCath = (cath) => {
        setChosen(cath)
        playAgain(cath)
    }
    const newLang = (lang) => {
        setToggleLanguage(lang)
        playAgain(chosen, lang)
    }
    let menuRef = useRef()
    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!menuRef.current.contains(event.target)) {
                setToggleMenu(false)
            }
        })
    })
    return (<>
        {toggleMenu
            ? <a className="hangman__table-menu" onClick={() => setToggleMenu(false)}><img className="closeLine" src='https://cdn-icons-png.flaticon.com/512/1828/1828778.png' /></a>
            : <a className="hangman__table-menu" onClick={() => setToggleMenu(true)}><img src='https://cdn-icons-png.flaticon.com/512/1828/1828859.png' /></a>
        }
        {toggleMenu && (
            <div ref={menuRef} className="hangman__table-dropdown scale-up-tl">
                <div className='hangman__table-language'>
                    <p className={toggleLanguage === "English" && ' hangman__table-menu-chosen'} onClick={() => newLang("English")}>English</p>
                    <p className={toggleLanguage === "Русский" && ' hangman__table-menu-chosen'} onClick={() => newLang("Русский")}>Русский</p>
                </div>
                <hr />
                <div className={`hangman__table-cathegory ${toggleCathegory && ' hangman__table-menu-chosen'}`} onClick={() => setToggleCathegory(!toggleCathegory)}>{toggleLanguage === 'Русский' ? "Тема" : "Cathegory"}</div>
                {toggleCathegory && (
                    <ul className="hangman__table-cathegory__list scale-up-ver-top">
                        {cathegoryArr.map((item, index) => (
                            <li key={"table-list" + (index + 1)} className={`${chosen === item && 'hangman__table-menu-chosen'}`} onClick={() => newCath(item)}>{toggleLanguage === "Русский" ? cathRus[item] : item}</li>
                        ))}
                    </ul>
                )}

            </div>
        )
        }
        <div className='hangman__table'>
            <Hungman hangPic={hangPic} word={word} setWord={setWord} />
            <div className='hangman__table-word'>
                <Word hangPic={hangPic} setHangPic={setHangPic} setIL={setIL} IL={IL} word={word} />
                {hangPic >= 6 ?
                    (<div className="hangman__table-youLost"> {word}</div>) : (<div className="hangman__table-youWon">{word.split('').every(item => IL.includes(item)) ? toggleLanguage === "English" ? 'YOU WON' : "ПОБЕДА!" : ""}</div>)}
            </div>
        </div>
    </>
    )
}

export default Table