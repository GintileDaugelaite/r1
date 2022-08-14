import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";


function Briedis() {
    return (

        <>
            <h2 style={{fontSize: rand(15,55) + 'px'}}>Hello, Briedžiai!</h2>
            <h3 style={{color: randColor()}}>Bye, bye</h3>
        </>
    );
}

export default Briedis;