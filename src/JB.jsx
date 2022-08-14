import './App.scss';
import { useState } from 'react';
// import rand from './Functions/rand';
// import Blue from './Components/JamesBond.jsx/Blue';
// import Green from './Components/JamesBond.jsx/Green';
// import Red from './Components/JamesBond.jsx/Red';
// import Brown from './Components/JamesBond.jsx/Brown';
// import Yellow from './Components/JamesBond.jsx/Yellow';
import Visual from './Components/JamesBond/Visual';
import B1 from './Components/JamesBond/B1';
import B2 from './Components/JamesBond/B2';
import B3 from './Components/JamesBond/B3';


function App() {

    // const [count, setCount] = useState(0);
    // const [shape, setShape] = useState(false);
    // const [color, setColor] = useState('white');
    // const [num, setNum] = useState(0);
    // const [num2, setNum2] = useState(0);
    // const [numC, setNumC] = useState('black');
    // const [num2C, setNum2C] = useState('black');
   const [visualBig, setVisualBig] = useState('square');
   const [colorR, setColorR] = useState('#61dafb');


    // const doSomething = () => {
    //     const r1 = rand(1, 5);
    //     const r2 = rand(1, 5);

    //     if(num + r1 > num2 + r2) {
    //         setNumC('crimson');
    //         setNum2C('gray');
    //     } else if(num + r1 < num2 + r2) {
    //         setNum2C('crimson');
    //         setNumC('gray');
    //     } else {
    //         setNum2C('black');
    //         setNumC('black');
    //     }

    //     setNum(s => s + r1);
    //     setNum2(s => s + r2);

    // }



    return (
        <div className="App">
            <header className="App-header">

                <h1>State Uplifting</h1>
                <Visual visualBig={visualBig} colorR={colorR}></Visual>
                <div className="nice-buttons-bin">
                <B1 setVisualBig={setVisualBig}></B1>
                <B2 setVisualBig={setVisualBig}></B2>
                <B3 setColorR={setColorR}></B3>
                </div> 
                {/* <Blue setCount={setCount}></Blue>
                <Green count={count}></Green>
                <Red setShape={setShape} color={color} num={num} numC={numC} ></Red>
                <Brown shape={shape} setColor={setColor} num2={num2} num2C={num2C}></Brown>
                <Yellow setNum={setNum} setNum2={setNum2}></Yellow>
                <Yellow doSomething={doSomething}></Yellow> */}

            </header>
        </div>
    );
}

export default App;