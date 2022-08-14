import { useState } from "react";

function Animals() {

    const [animal, setAnimal] = useState('');
    const [age, setAge] = useState('');
    const [list, setList] = useState([]);

    const add = () => {
        // const line = {animal, age};
        setList(l => [...l, { animal, age }]);
        setAnimal('');
        setAge(''); // sitais padarom, kad irasius kazka i input, neberodo laukelyje, dingsta info
    }

    const sort = () => {
        setList(l => [...l].sort((a, b) => a.animal.localeCompare(b.animal))); //localeCompare - sortinimui
    }

    return (

        <div className="animals-list">
            <div className="inputs">
                <div>
                    <span>Animal:</span>
                    <input type='text' value={animal} onChange={e => setAnimal(e.target.value)}></input>
                </div>

                <div>
                    <span>Age:</span>
                    <input type='text' value={age} onChange={e => setAge(e.target.value)} ></input>
                </div>

                <button className="red" onClick={add}>Add</button>
            </div>

            <div className="list">
                {
                    list.map((a, i) => <div key={i}><b>{i + 1}.</b> <span>{a.animal}</span> <i>Age: {a.age} years</i> </div>)
                }
                <button className="red" onClick={sort}>Sort by name</button>
            </div>

        </div>

    );
}

export default Animals;