import { useState } from "react";


function Checkbox() {

    const [cb, setCb] = useState(true);
    const [cb2, setCb2] = useState(true);


    return (
        <>
        <div className="shape" style={{
            backgroundColor: cb ? 'blue' : 'red',
            borderRadius: cb2 ? '50%' :  null
            }}></div>
        <div>Color: <input type="checkbox" checked={cb} onChange={() => setCb(b => !b)}></input></div>
        <div>Shape: <input type="checkbox" checked={cb2} onChange={() => setCb2(b => !b)}></input></div>
        </>
    );
}

export default Checkbox;