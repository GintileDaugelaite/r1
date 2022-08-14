
import { useEffect } from "react";
import { useState } from "react";

function Green({ setSq, sqId, sq }) {

    const [text, setText] = useState('');
    const [color, setColor] = useState('coral');
    // const [type, setType] = useState(false);
    const [size, setSize] = useState(0);
    const [select, setSelect] = useState(0);


    useEffect(() => {
        if (0 === parseInt(select)) {
            return;
        }
        setSize(sq.find(s => s.id === parseInt(select)).size)
}, [select, sq])

useEffect(() => {
    if (0 === parseInt(size)) {
        return;
    }
    setSq(sq => sq.map(s => s.id !== parseInt(select) ? {...s} : {...s, size: parseInt(size)} ))
}, [size])

    const add = () => {
        setSq(s => [...s, { text, color, id: sqId.current++, show: true, size: 200 }]);
        setText('');

    }

    const sort = () => {
        setSq(s => [...s].sort((a, b) => a.text.localeCompare(b.text)));
    }

    const doDefault = () => {
        setSq(s => [...s].sort((a, b) => a.id - b.id));
    }

    const filterGreen = () => {
        setSq(s => s.map(sq => ({ ...sq, show: sq.color === 'greenyellow' ? true : false })));
    }

    const filterOff = () => {
        setSq(s => s.map(sq => ({ ...sq, show: true })));
    }

    // doType = () => {
    //     setShape(t => !t)
    // }


    return (
        <div className="inputs-bin">
            <div>
                <input id="coral" type="checkbox" checked={color === 'coral'} value="coral" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="coral" style={{ backgroundColor: 'coral' }}></label>

                <input id="greenyellow" type="checkbox" checked={color === 'greenyellow'} value="greenyellow" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="greenyellow" style={{ backgroundColor: 'greenyellow' }}></label>

                <input id="plum" type="checkbox" checked={color === 'plum'} value="plum" onChange={e => setColor(e.target.value)}></input>
                <label htmlFor="plum" style={{ backgroundColor: 'plum' }}></label>

            </div>
            <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={add}>Add []</button>
            <button className="blue" onClick={sort}>sort</button>
            <button className="pinkish" onClick={doDefault}>default</button>
            <button className="green" onClick={filterGreen}>only green</button>
            <button onClick={filterOff}>All</button>
            <div>
                <select value={select} onChange={e => setSelect(e.target.value)}>
                    <option value="0">Select Square</option>
                    {
                        sq.map(s => <option value={s.id} key={s.id}>ID: {s.id} {s.text}</option>)
                    }

                </select></div>
            <input type='range' value={size} onChange={e => setSize(e.target.value)} min="100" max="300" step="10"></input>

            {/* <input onChange={doType} type="checkbox" value={type} checked={type}></input> */}
            {/* <label></label> */}
            <span></span>
        </div>
    );
}

export default Green;