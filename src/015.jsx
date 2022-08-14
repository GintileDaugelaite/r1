import { useState, useRef } from 'react';
import './App.scss';
import First from './Components/015/First';


function App() {

const [counter, setCounter] = useState([0, 0])
const sqId = useRef(1);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Total Recall {counter[0]} {counter[1]} </h1>
                <First setCounter={setCounter} sqId={sqId}></First>
            </header>
        </div>
    );
}

export default App;