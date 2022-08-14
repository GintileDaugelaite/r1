import './App.scss';
import Buttons from './Components/008/Buttons';
import View from './Components/008/View';
import { useState } from 'react';
import RandomSquares from './Components/008/RandomSquares';
import HelloWorld from './Components/008/HelloWorld';
import HelloWorld2 from './Components/008/HelloWorld2';
import CS from './Components/008/CS';


function App() {

    const [view, setView] = useState(0);


    return (
        <div className="App">
            <header className="App-header">
                <div className="nice-buttons-bin">
                    <Buttons setView={setView}></Buttons>
                </div>

                <View view={view} number={1} element={<RandomSquares/>}></View>
                <View view={view} number={2} element={<HelloWorld/>}></View>
                <View view={view} number={3} element={<HelloWorld2/>}></View>
                <View view={view} number={4} element={<CS/>}></View>
                
            </header>
        </div>
    );
}

export default App;