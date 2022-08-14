import { useState } from "react";
import rand from "../../Functions/rand";



function HelloWorld() {

    const [text, setText] = useState(0);

    return (
            <h2 style={{
                letterSpacing: text + 'px',
                transition: 'all 0.7s cubic-bezier(.19,.92,.96,-0.03)'
            }} onClick={() => setText(20 - rand(0, 23))}>Hello World!</h2>


    );
}

export default HelloWorld;

//setRSq([...Array(rand(5, 25))].map(_ => randColor()));