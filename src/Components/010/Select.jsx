import { useState } from "react";

const selectData = [
    { value: 1, text: 'One' },
    { value: 2, text: 'Two' },
    { value: 3, text: 'Three' },
    { value: 5, text: 'Five' }
];

function Select() {

    const [select, setSelect] = useState(5);
    const [color, setColor] = useState('');
    const [colorInput, setColorInput] = useState('white');
    const [count, setCount] = useState(0);


    const selectHandler = e => {

        setSelect(e.target.value)

        setCount(c => c + 1);

    }



    return (
        <>
            <fieldset>
                <legend style={{ color }}>Selected: <b>{select} {selectData.find(s => select == s.value).text}</b></legend>
                <select value={select} onChange={selectHandler}>
                    {
                        selectData.map(s => <option key={s.value} value={s.value}>{s.text}</option>)
                    }

                </select>
                <div></div>
                <input type='color' value={colorInput} onChange={e => setColorInput(e.target.value)}></input>
            </fieldset>
            <button onClick={() => setColor(colorInput)}>Make color</button>
            <h4>Select Count: {count}</h4>
        </>

    );
}

export default Select;