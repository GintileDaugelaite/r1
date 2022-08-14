import { useState } from "react";

function Sq5() {

    const [sq5, setSq5] = useState(false);

    return (

        <div className='shape' style={{borderRadius: sq5 ? '50%' : null}} onClick={() => setSq5(s => !s)}></div>

    );
}

export default Sq5;