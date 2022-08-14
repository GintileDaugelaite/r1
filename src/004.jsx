import './App.css';
import Circles from './Components/004/Circles';
import Shape from './Components/004/Shape';
import Text from './Components/004/Text';
import A from './Components/004/A';
import C from './Components/004/C';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Props</h1>
                <Text zodis="Geras Zuikis" spalva="green"></Text>
                <Text zodis="Blogas Zuikis" spalva="blue"></Text>
                <Text zodis="Raudonas Zuikis" spalva="crimson"></Text>
                <Shape forma='square'></Shape>
                <Shape forma='circle'></Shape>
                <div className='container'>
                    {
                        [...Array(10)].map((_, i) => <Circles key={i} number={i + 1}></Circles>)
                    }
                </div>
                <div className='container'>
                   <A color1="pink" color2="yellow"></A>
                </div>
                <div className='container'>
                   <C count={4}></C>
                </div>




            </header>
        </div>
    );
}

export default App;