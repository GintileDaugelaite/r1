import { useState } from "react";

function Task() {

    const [text, setText] = useState('');
    const [word, setWord] = useState('');
    const [color, setColor] = useState('');
    const [colorInput, setColorInput] = useState('');

    const doChange = () => {
        setWord(text)
        setColor(colorInput)
    }

    return (

        <div className="first">
            <div className="input">
                <h2 style={{color}}>{word}</h2>
                <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
                <div>
                    <button className="green" onClick={doChange}>Add</button>
                    <input type='color' value={colorInput} onChange={e => setColorInput(e.target.value)}></input>
                </div>
            </div>
        </div>


    );
}

export default Task;