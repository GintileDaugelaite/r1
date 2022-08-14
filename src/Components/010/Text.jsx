import { useState } from "react";

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('yellow');

    const inputHandler = e => {
        //console.log('nice', e.target.value) //e --> event'as, t.y. onChange event'as, rodo kad sitam even'te, tokiam inpute, tokia reiksme ivyko
        setText(e.target.value)
    }

    const colorHandler = e => {
        setColor(e.target.value)
    }


    return (
        <fieldset>
            <legend style={{color}}>{text ? text : 'text'}</legend>
            <input type='text' value={text} onChange={inputHandler}></input>
            <div></div>
            <input type='color' value={color} onChange={colorHandler}></input>
        </fieldset>
    );
}

export default Text;