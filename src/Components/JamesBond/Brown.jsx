import randColor from "../../Functions/randColor";

function Brown({ shape, setColor, num2, num2C }) {

    return (
        <>
            <div className="shape" style={{
                borderRadius: shape ? '50%' : null
            }}></div>
            <button onClick={() => setColor((randColor()))}>Color</button>
        <h2 style={{
        color: num2C
        }}>{num2}</h2>
        </>
    );
}

export default Brown;