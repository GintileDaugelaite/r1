import './App.css';
import Bebras from './Components/003/Bebras';
import Briedis from './Components/003/Briedis';
import BlueCircle from './Components/003/BlueCircle';
import RedCircle from './Components/003/RedCircle';
import randColor from './Functions/randColor';


const cats = ['Murkis', 'Pūkis', 'Micius'];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='red'>Start</h1>
        <Bebras></Bebras>
        <Briedis></Briedis>
        {
          cats.map((c, i) => <span key={i}>{c}</span>)
        }
        <div className='container'>
          {
            [...Array(5)].map((_, i) => <BlueCircle key={i}></BlueCircle>)
          }
        </div>
        <div className='scd-container'>
        {
          [...Array(6)].map((_, i) => i % 2 ? <BlueCircle key={i}></BlueCircle> : <RedCircle key={i}></RedCircle>)
        }
        </div>
        {
          [...Array(10)].map((_, i) => <div className='circle' key={i} style={{backgroundColor: randColor()}}></div>)
        }
        

      </header>
    </div>
  );
}

export default App;
