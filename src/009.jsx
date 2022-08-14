import './App.scss';
import Kv from './Components/009/Kv';
import { useState } from 'react';
import randColor from './Functions/randColor';
import { useEffect } from 'react';
import Word from './Components/009/Word';
import Table from './Components/009/Table';

const magicNumbers = [
    {left: 5, right: 11},
    {left: 45, right: 0},
    {left: 4, right: 22},
    {left: 13, right: 13}
];

function App() {

    const [kv, setKv] = useState([]);
    const [count, setCount] = useState(0);

    const add = () => {
        setKv(k => [...k, randColor()])
        console.log('Kvadratukas pridetas')
    }


    // useEffect(() => {
    //     console.log('kvadratukas pridetas', kv.length);
    // }, [kv]);

    useEffect(() => {
        if (kv.length > 10) {
            setKv([]);
        }
    }, [kv]);

    useEffect(() => {

        if (kv.length === 4 && kv[3] !== 'black') {

            setKv(kv.map((c, i) => i === 3 ? 'black' : c));
        }

    }, [kv]);

    useEffect(() => {
        if (count > 10) {
            setCount(0)
        }
    }, [count]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>useEffect --- {count}</h1>
                <div className='container'>
                    {
                        kv.map((k, i) => <Kv key={i} k={k} i={i}></Kv>)
                    }
                </div>
                <div className='container'>
                    <button onClick={add}>add []</button>
                    <button onClick={() => setCount(c => c + 1)}>add +1</button>
                </div>

                <Word color='orange'></Word>
                <Table data={magicNumbers}></Table>
                


            </header>
        </div>
    );
}

export default App;