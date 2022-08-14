import { useState } from "react";

function Visual({ visualBig, colorR }) {


    const [border, setBorder] = useState(true);
    return (
        <>
            <div className={'big-visual ' + visualBig} style={{
                backgroundColor: colorR + '69',
                borderColor: colorR,
                borderWidth: border ? null : 0
            }}></div>
            <button onClick={() => setBorder(s => !s)}>Border</button>
        </>
    );
}

export default Visual;