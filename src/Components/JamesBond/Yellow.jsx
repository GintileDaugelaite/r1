
// function Yellow({ setNum, setNum2 }) {
function Yellow({ doSomething }) {

    return (

        // <button className="blue" onClick={() => {setNum(s => s + rand(1, 5)); setNum2(s => s + rand(1, 5))}} >+Random</button>
        <button className="blue" onClick={doSomething}>+Random</button>

    );
}

export default Yellow;