
function Buttons({setView}) {


    return (
        <>
        <button className="green" onClick={() => setView(1)}>View 1</button>
        <button className="blue" onClick={() => setView(2)}>View 2</button>
        <button className="red" onClick={() => setView(3)}>View 3</button>
        <button className="pinkish" onClick={() => setView(4)}>View 4</button>
        </>
    );
}

export default Buttons;