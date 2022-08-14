import { Component } from 'react';

class NiceClass extends Component { //component - tevas, kuris turi visas zinias, kad klasė būtų komponentas;

    constructor() {
        super();
        this.state = { size: 30, background: 'skyblue', clicks: 1, arr: [] };//<-- defaultiniu state'o reiksmiu priskyrimas
    }

    greenButtonClicked = () => {

        this.setState({ size: 60 });
        console.log(this.state)
    }

    blueButtonClicked() {
        this.setState(this.state.background === 'yellow' ? { background: 'skyblue' } : { background: 'yellow' });
    }
    incrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    addSquare = () => {
        this.setState(s => ({arr: [...s.arr, '']}))
    }

    render() {
        return (
            <>
                <h3 style={{
                    color: this.props.color,
                    backgroundColor: this.state.background,
                    fontSize: this.state.size + 'px'

                }}>Aš princesė</h3>

                <h2>{this.state.clicks}</h2>

                <button className='green' onClick={this.greenButtonClicked}>more</button>
                <button className='blue' onClick={() => this.blueButtonClicked()}>color</button>
                <button className='red' onClick={this.incrementItem}>number</button>
                <button className='pinkish' onClick={this.addSquare}>+1 Square</button>
                <div className='container'>
                    {
                        this.state.arr.map((_, i) => <div className='shape' key={i}></div>)
                    }
                </div>

            </>
        );
    }
}

export default NiceClass;