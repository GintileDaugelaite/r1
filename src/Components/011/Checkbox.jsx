import { useState, useEffect } from "react";


function Checkbox() {

    const [cb, setCb] = useState({ A: true, B: false, C: false, D: true });
    const [checked, setChecked] = useState([]);

    //jeigu turime objekta, kuris turi savybe labas
    //obj.labas = 55;
    //p = 'labas
    //obj[p] = 55
    //{labas: 55}
    //{[p]: 55}

    const doChange = e => {
        setCb(c => ({ ...c, [e.target.value]: !c[e.target.value] })); //kadangi savybe kintamajame, rasom [tokiuose skliaustuose]
    }

    useEffect(() => {
        const c = [];

        for(const a in cb) {
            if(cb[a] === true) {
                c.push(a)
            }
            setChecked(c);
        }
    }, [cb]);


    return (
        <fieldset>
            <legend>Checkbox: {checked.map(l => <span key={l}>{l}</span>)}</legend>
            <div> A <input type="checkbox" value="A" checked={cb.A} onChange={doChange}></input> </div>
            <div> B <input type="checkbox" value="B" checked={cb.B} onChange={doChange}></input> </div>
            <div> C <input type="checkbox" value="C" checked={cb.C} onChange={doChange}></input> </div>
            <div> D <input type="checkbox" value="D" checked={cb.D} onChange={doChange}></input> </div>

        </fieldset>
    );
}

export default Checkbox;