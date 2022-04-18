import { useState } from 'react';
import './App.css';
import Keyboard from './components/keyboard/Keyboard.jsx'
import Table from './components/table/Table.jsx'
import { corpus } from './corpus'
function App() {
  const [IL, setIL] = useState([])
  const [hangPic, setHangPic] = useState(0)
  const [word, setWord] = useState((corpus[Math.floor(Math.random() * 533)]).toUpperCase())
  const playAgain = () => {
    setHangPic(0)
    setIL([])
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    alphabet.split('').map(id => {
      document.getElementById('btn' + id).classList.remove('wrong', 'right')
      document.getElementById('btn' + id).disabled = false
    })
    setWord((corpus[Math.floor(Math.random() * 533)]).toUpperCase())
  }
  return (
    <div className="App">
      <Table IL={IL} word={word} setWord={setWord} setIL={setIL} hangPic={hangPic} setHangPic={setHangPic} />
      <Keyboard IL={IL} word={word} setWord={setWord} setIL={setIL} hangPic={hangPic} setHangPic={setHangPic} />
      <button className="playAgain" onClick={playAgain}>NEW GAME</button>
    </div>
  );
}

export default App;
