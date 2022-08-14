import './App.scss';
// import Enter from './Components/012/Enter';
// import Show from './Components/012/Show';
// import Task from './Components/012/Task';
import { useState } from 'react';
import InputBox from './Components/012/InputBox';
import Checkbox from './Components/012/Checkbox';
import Radio from './Components/012/Radio';



function App() {

    const [word, setWord] = useState('');
    const [text, setText] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                {/* <h1>{word ? word : 'Repeat'}</h1>
                {/* <Task></Task>
                <Enter setWord={setWord}></Enter>
                <Show word={word}></Show> */}
                {/* <InputBox text={text} setText={setText} word={word} setWord={setWord}></InputBox>
                <Checkbox></Checkbox> */}
                <Radio></Radio>

            </header>
        </div>
    );
}

export default App;