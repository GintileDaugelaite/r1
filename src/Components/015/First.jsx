import { useEffect } from "react";
import { useState } from "react";
import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function First({ setCounter, sqId }) {
    const [sq, setSq] = useState([]);

    useEffect(() => { //surusiuot/paskaiciuot ar circle ar square
        setCounter(s => [
            sq.filter(s => s.type === 0).length,
            sq.filter(s => s.type === 1).length
        ])
    }, [sq, setCounter]);

    //kvadratuko pridejimas

    // const add = () => {
    //     setSq(s => [...s, '', '') // <- '' vienas kvadratukas, '', '' <- du kvadratukai.
    // }

    const add = () => {
        setSq(s => [...s, { color: randColor(), type: rand(0, 1), size: rand(25, 125), id: sqId.current++, show: true }, { color: randColor(), type: rand(0, 1), size: rand(25, 125), id: sqId.current++, show: true }]) // <- abu skirtingu spalvu + apskritimas arba kvadratukas + skirtingo dydzio formos

    }

    const sort = () => {
        setSq(s => [...s].sort((a, b) => a.size - b.size));
    }

    const doDefault = () => {
        setSq(s => [...s].sort((a, b) => a.id - b.id)); //bet galima ir su row: s.length
    }

    const filterSq = () => {
        setSq(s => s.map(f => ({ ...f, show: f.type ? false : true }))) //isfiltruojam pagal dydi kvadratukus
    }

    const filterC = () => {
        setSq(s => s.map(f => ({ ...f, show: f.type ? true : false }))) //isfiltruojam pagal dydi apskritimus
    }

    const filterAll = () => {
        setSq(s => s.map(f => ({ ...f, show: true }))) //isfiltruojam visus kaip buvo pradzioj
    }

    const sortAll = () => {
        setSq(s => [...s].sort((a, b) => b.type - a.type || a.size - b.size));
    }

    return (

        <>
            <div className="container">
                {
                    sq.map((s, i) => s.show ? <div className="square-1" key={s.id} style={{
                        backgroundColor: s.color,
                        borderRadius: s.type ? '50%' : null,
                        width: s.size + 'px',
                        height: s.size + 'px'

                    }} ></div> : null)
                }
            </div>
            <div className="container">
                <button onClick={add}>Add</button>
                <button className="pinkish" onClick={sort}>sort by size</button>
                <button className="pinkish" onClick={doDefault}>default</button>
                <button className="blue" onClick={filterSq}>show []</button>
                <button className="blue" onClick={filterC}>show o</button>
                <button className="blue" onClick={filterAll}>show all</button>
                <button className="red" onClick={sortAll}>sort all</button>
            </div>
        </>
    );


}

export default First;