import './App.scss';
import Green from './Components/013/Green';
import Purple from './Components/013/Purple';
import { useState, useRef } from 'react';


function App() {

    const [sq, setSq] = useState([]);
    const [word, setWord] = useState('');
    const [list, setList] = useState([]);
 
    const sqId = useRef(1);



    return (
        <div className="App">
            <header className="App-header">
                <h1>Tema 2</h1>
                <div className="two-col">
                    <div className="one"> <Green setSq={setSq} setWord={setWord} sqId={sqId} setList={setList} list={list} sq={sq}></Green> </div>
                    <div className="two">  <Purple sq={sq} word={word} ></Purple></div>
                </div>

            </header>
        </div>
    );
}

export default App;