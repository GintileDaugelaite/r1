import randColor from "../../Functions/randColor";

function B3({setColorR}) {


    return (
        <button className="green" onClick={() => setColorR((randColor()))}>rColor</button>

    );
}

export default B3;