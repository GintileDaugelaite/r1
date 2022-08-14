function Red({ setShape, color, num, numC }) {

    return (
        <>
            <div className='shape' style={{
                 backgroundColor: color
            }}></div>
            <button onClick={() => setShape(s => !s)}>Shape</button>
            <h2 style={{color: numC}}>{num}</h2>

        </>
    );
}

export default Red;