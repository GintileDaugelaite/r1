import RedCircle from "./RedCircle";
import BlueCircle from "./BlueCircle";
import rand from "../../Functions/rand";

function Bebras() {
    return (
        <>
            <h2>Hello { rand(10, 20) }, Bebrai!</h2>
           {
            rand(0,1) ? <RedCircle></RedCircle> : <BlueCircle></BlueCircle>
           }
        </>
    );
}

export default Bebras;
