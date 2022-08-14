import randColor from "../../Functions/randColor";
import rand from "../../Functions/rand";
import { useState } from "react";



function RandomSquares() {

    const [rSq, setRSq] = useState([]);

    const makeIt = () => {

        setRSq([]);
        const count = rand(5, 25);
        let go = 0;

        const timerId = setInterval(() => {
            setRSq(s => [...s, randColor()])
            go++;
            if(count === go) {
                clearInterval(timerId);
            }

        }, 400);

    }

    return (
        <>
            <button onClick={makeIt}>Make It</button>

            <div className="container">
                {
                    rSq.map((s, i) => <div className='nice-square' key={i} style={{
                        backgroundColor: s + '79',
                        borderColor: s
                    }}></div>)
                }

            </div>
        </>

    );
}

export default RandomSquares;