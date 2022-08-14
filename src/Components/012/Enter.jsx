import { useState } from "react";

function Enter({ setWord }) {

    const [text, setText] = useState('');


    return (

        <div className="first">
            <div className="input">
                <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
                <button className="blue" onClick={() => setWord(text)}>Add</button>
            </div>
        </div>


    );
}

export default Enter;