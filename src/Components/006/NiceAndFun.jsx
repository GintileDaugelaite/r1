import { useState } from 'react';
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';
import SQ4 from './SQ4';
import Sq5 from './Sq5';
import Sq6 from './Sq6';




function NiceAndFun({ color }) {

    const [size, setSize] = useState(36); //sitas state'as vadinasi hook'as
    const [bg, setBg] = useState('white');
    const [num, setNum] = useState(1);
    const [sq, setSq] = useState([]);
    const [sq2, setSq2] = useState([]);
    const [sq3, setSq3] = useState([]);
    const [sq4, setSq4] = useState([]);
    const [sq5, setSq5] = useState([]);
    const [sq6, setSq6] = useState([]);


    const doSize = () => {
        setSize(s => s === 56 ? 36 : 56);
    }

    const doBg = () => {
        setBg(s => s === 'yellow' ? 'white' : 'yellow');
    }

    const addNum = () => {

        setNum(s => s + rand(5, 10));
    }

    const addSquare = () => {
        setSq(s => [...s, '']);
    }

    const addSquare2 = () => {
        setSq2(s => [...s, randColor()]);
    }

    const addSquare3 = () => {
        setSq3(s => [...s, { color: randColor(), number: rand(10, 99) }]);
    }

    const addSquare4 = () => {
        setSq4(s => [...s, '']);
    }
    const addSquare5 = () => {
        setSq5(s => [...s, '']);
    }
    const addSquare6 = () => {
        setSq6(s => [...s, '']);
    }





    return (
        <>
            <h2 style={
                {
                    color: color,
                    fontSize: size + 'px',
                    backgroundColor: bg
                }
            }>Braškė</h2>
            <h2>{num}</h2>
            <div className='container'>
                {
                    sq.map((_, i) => <div className='shape' key={i}>{i + 1}</div>)
                }
                {
                    sq2.map((c, i) => <div className='shape' key={i} style={{
                        backgroundColor: c
                    }}></div>)
                }
                {
                    sq3.map((c, i) => <div className='shape' key={i} style={{
                        backgroundColor: c.color
                    }}>{c.number}</div>)
                }
                {
                    sq4.map((_, i) => <SQ4 key={i}></SQ4>)
                }
                {
                    sq5.map((_, i) => <Sq5 key={i}></Sq5>)
                }

                {
                    sq6.map((_, i) => <Sq6 key={i}></Sq6>)
                }

            </div>

            <div className='container'>
                <button onClick={doSize}>SIZE</button>
                <button onClick={doBg}>BG</button>
                <button onClick={addNum}>Add Num</button>
                <button onClick={addSquare}>+1 Square</button>
                <button onClick={addSquare2}>Rand SQ</button>
                <button className='red' onClick={() => setSq([])}>Delete SQ1</button>
                <button className='red' onClick={() => setSq2(s => s.filter((_, i) => i))}>- SQ2</button>
                <button className='blue' onClick={addSquare3}>SQ3</button>
                <button className='blue' onClick={addSquare4}>SQ4</button>
                <button className='green' onClick={addSquare5}>SQ5</button>
                <button className='green' onClick={addSquare6}>SQ6</button>
            </div>
        </>
    )

}

export default NiceAndFun;

