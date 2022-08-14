import { useState } from 'react';
import { useReducer } from 'react';
import './App.scss';
import count from './Reducers/count';
import square from './Reducers/square';

function App() {

    const [number, dispatchNumber] = useReducer(count, 0);
    const [numberVal, setNumberVal] = useState('');
    const [squareNum, dispatchSquareNum] = useReducer(square, []);
    const [sqVal, setSqVal] = useState('');

    const add1 = () => {
        //pradedam nuo action objekto. Action type nusako ka mums reikes daryti
        const action = {
            type: 'plus_one'
        }
        dispatchNumber(action); //ideda, 'siuntini' i pastomata(dispatcheri). jis pristato sita objekta i reduceri.
    }

    const rem1 = () => {
        const action = {
            type: 'minus_one'
        }
        dispatchNumber(action);
    }

    const do0 = () => {
        const action = {
            type: 'reset'
        }
        dispatchNumber(action);
    }

    const add = () => {

        const action = {
            type: 'add',
            payload: sqVal
        }
        dispatchSquareNum(action);
    }

    const rem = () => {
        const action = {
            type: 'minus'
        }
        dispatchSquareNum(action);
    }

    const clear = () => {
        const action = {
            type: 'clear'
        }
        dispatchSquareNum(action);
    }

    const addSome = () => {
        const action = {
            type: 'add_some',
            payload: numberVal //tas skaicius, kuri reikia prideti
        }
        dispatchNumber(action);
    }

    const remSome = () => {
        const action = {
            type: 'rem_some',
            payload: numberVal
        }
        dispatchNumber(action);
    }

    const sortMin_Max = () => {
        const action = {
            type: 'min_max'
        }
        dispatchSquareNum(action);
    }

    const sortMax_max = () => {
        const action = {
            type: 'max_min'
        }
        dispatchSquareNum(action);
    }

    const even = () => {
        const action = {
            type: 'even'
        }
        dispatchSquareNum(action);
    }

    const odd = () => {
        const action = {
            type: 'odd'
        }
        dispatchSquareNum(action);
    }

    const all = () => {
        const action = {
            type: 'all'
        }
        dispatchSquareNum(action);
    }




    return (
        <div className="App">
            <header className="App-header">
                <h1>useReducer</h1>
                <h2>Number now is: {number}</h2>
                <div className='container'>
                    <button onClick={add1}>+1</button>
                    <button onClick={rem1}>-1</button>
                    <button onClick={do0}>0</button>
                    <input className='inpt' type="text" value={numberVal} onChange={e => setNumberVal(e.target.value.length <= 2 ? e.target.value : numberVal)}></input>
                    <button onClick={addSome}>+?</button>
                    <button onClick={remSome}>-?</button>

                </div>
                <div className='container'>
                    {

                        squareNum.map((s, i) => s.show ? <div className='square-1' key={i}>{s.number}</div> : null)

                    }

                </div>
                <div className='container'>
                    <button onClick={add}>+[]</button>
                    <input className='inpt' type="text" value={sqVal} onChange={e => setSqVal(e.target.value.length <= 2 ? e.target.value : sqVal)}></input>
                    <button onClick={rem}>-[]</button>
                    <button onClick={clear}>[x]</button>
                    <button className='pinkish' onClick={sortMin_Max}>min-max</button>
                    <button className='pinkish' onClick={sortMax_max}>max-min</button>
                </div>
                <div className='container'>
                    <button className='blue' onClick={even}>Even</button>
                    <button className='blue' onClick={odd}>Odd</button>
                    <button className='blue' onClick={all}>All</button>
                </div>
            </header>
        </div>
    );
}

export default App;