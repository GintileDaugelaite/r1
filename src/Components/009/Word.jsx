import randColor from "../../Functions/randColor";
import { useState } from "react";
import { useEffect } from "react";

function Word({ color }) {

    const [good, setGood] = useState(null);

    useEffect(() => {
        setGood(color);
    }, [color]);

    return (
        <>
            <h1 style={{ color: good }}>GOOD</h1>
            <button onClick={() => setGood(randColor())}>Rand</button>
        </>

    )
}

export default Word;