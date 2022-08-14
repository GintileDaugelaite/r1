// import { useState } from "react";
import ButtonBox from "./ButtonBox";

function InputBox({text, setWord, setText}) {

    // const [text, setText] = useState('');
    


    return (

        <div className="first">
            <div className="input">
                <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
                <ButtonBox setWord={setWord} text={text}></ButtonBox>
            </div>
        </div>


    );
}

export default InputBox;