import { useState } from "react";

function Radio() {


    const [radio, setRadio] = useState('C');

    const doRadio = e => {
        setRadio(e.target.value)
    }

    return (
        <div className="animals-list">

            <div>  A <input type='radio' value='A' name="r" onChange={doRadio} checked={'A' === radio}></input></div>
            <div>  B <input type='radio' value='B' name="r" onChange={doRadio} checked={'B' === radio}></input></div>
            <div>  C <input type='radio' value='C' name="r" onChange={doRadio} checked={'C' === radio}></input></div>
            <div>  D <input type='radio' value='D' name="r" onChange={doRadio} checked={'D' === radio}></input></div>

        </div>
    );
}

export default Radio;