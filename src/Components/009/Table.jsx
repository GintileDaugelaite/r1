import rand from "../../Functions/rand";
import { useState, useEffect } from "react";


function Table({ data }) {

    const [num, setNum] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);


    useEffect(() => {
        if (null === sortOrder) {
            return;
        }
        if ('left' === sortOrder) {
            doLeft();
        } else if ('right' === sortOrder) {
            doRight();
        } else {
            doDefault();
        }

    }, [sortOrder])

    useEffect(() => {
        setNum(data.map((e, i) => ({ ...e, row: i, show: true })).filter(d => d.left !== d.right));
        // setNum(data.filter(d => d.left !== d.right));

    }, [data]);

    const add = () => {
        const left = rand(0, 45);
        const right = rand(0, 45);

        if (left !== right) {
            setNum(n => [...n, { left, right, row: n.length, show: true }]);
        }
    }

    const doLeft = () => {
        setNum(n => [...n].sort((a, b) => b.left - a.left));
    }

    const doRight = () => {
        setNum(n => [...n].sort((a, b) => b.right - a.right));
    }

    const doDefault = () => {
        setNum(n => [...n].sort((a, b) => a.row - b.row));
    }

    const filter20 = () => {

        setNum(n => n.map(nb => ({ ...nb, show: nb.left > 20 })));

    }

    const filter10 = () => {
        setNum(n => n.map(nb => ({ ...nb, show: nb.left < 10 })));
    }

    const noFilter = () => {
        setNum(n => n.map(nb => ({ ...nb, show: true })));
    }


    return (
        <>
            <ul>
                {
                    num?.map((lr, i) => lr.show ? <li key={i}>{lr.left}-{lr.right}</li> : null)
                }
            </ul>
            <div className="container">
                <button onClick={add}>add num</button>

                <button className="blue" onClick={doLeft}>Left Sort</button>
                <button className="blue" onClick={doRight}>Right Sort</button>
                <button className="blue" onClick={doDefault}>Default</button>

                <button className="red" onClick={() => setSortOrder('left')}>Left Sort</button>
                <button className="red" onClick={() => setSortOrder('right')}>Right Sort</button>
                <button className="red" onClick={() => setSortOrder('default')}>Default</button>

                <button className="green" onClick={filter20}>min 21</button>
                <button className="green" onClick={filter10}>max 9 </button>
                <button className="green" onClick={noFilter}>Show all</button>
            </div>
        </>

    )
}

export default Table;