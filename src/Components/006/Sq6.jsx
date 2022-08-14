import { useState } from "react";

function Sq6() {

    const [count, setCount] = useState(0);


    return (

        <div className='shape' style={{
            borderRadius: count > 5 ? '50%' : null
        }} onClick={() => setCount(s => s + 1)}>{count}</div>
        
      

    );
}

export default Sq6;