function ButtonBox({ setWord, text }) {

    return (
        <button className="green" onClick={() => setWord(text)}>Add</button>
    );
}

export default ButtonBox;