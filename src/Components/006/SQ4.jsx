import { useState } from "react";

function SQ4() {

    const [count, setCount] = useState(0);

    return (

        <div className='shape' onClick={() => setCount(s => s + 1)}>{count}</div>

    );
}

export default SQ4;