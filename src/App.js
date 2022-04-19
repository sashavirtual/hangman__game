import { useState } from 'react';
import './App.css';
import Keyboard from './components/keyboard/Keyboard.jsx'
import Table from './components/table/Table.jsx'
import { corpus, corpusLg, corpusRus, corpusRusLg } from './corpus'
function App() {
  const [IL, setIL] = useState([])
  const [hangPic, setHangPic] = useState(0)
  const [toggleLanguage, setToggleLanguage] = useState("Russian")
  const [chosen, setChosen] = useState('Random')
  const [word, setWord] = useState((corpusRus[chosen][Math.floor(Math.random() * corpusRusLg[chosen])]).toUpperCase())
  console.log(document.querySelector(".playAgain"))
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {}
  const playAgain = (cath, language, lang) => {
    setHangPic(0)
    setIL([])
    let alphabet = toggleLanguage === 'English' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
    alphabet.split('').map(id => {
      document.getElementById('btn' + id.charCodeAt(0)).classList.remove('wrong', 'right')
      document.getElementById('btn' + id.charCodeAt(0)).disabled = false
    })
    if (language) {
      if (language === 'English') {
        setWord((corpus[cath][Math.floor(Math.random() * corpusLg[cath])]).toUpperCase())
      } else {
        setWord((corpusRus[cath][Math.floor(Math.random() * corpusRusLg[cath])]).toUpperCase())
      }
    } else if (toggleLanguage) {
      if (toggleLanguage === 'English') {
        setWord((corpus[cath][Math.floor(Math.random() * corpusLg[cath])]).toUpperCase())
      }
      else {
        setWord((corpusRus[cath][Math.floor(Math.random() * corpusRusLg[cath])]).toUpperCase())
      }
    } else {
      cath ?
        setWord((corpus[cath][Math.floor(Math.random() * corpusLg[cath])]).toUpperCase())
        :
        setWord((corpus[chosen][Math.floor(Math.random() * corpusLg[chosen])]).toUpperCase())
    }
  }
  return (
    <div className="App">
      <Table toggleLanguage={toggleLanguage} setToggleLanguage={setToggleLanguage} IL={IL} playAgain={playAgain} chosen={chosen} setChosen={setChosen} word={word} setWord={setWord} setIL={setIL} hangPic={hangPic} setHangPic={setHangPic} />
      <Keyboard toggleLanguage={toggleLanguage} IL={IL} word={word} setWord={setWord} setIL={setIL} hangPic={hangPic} setHangPic={setHangPic} />
      <button className="playAgain" onClick={() => playAgain(chosen, toggleLanguage)}>{toggleLanguage === "English" ? "NEW GAME" : 'НОВАЯ ИГРА'}</button>
    </div>
  );
}

export default App;
