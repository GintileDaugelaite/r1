function D({ count }) {

    return (
        <>
        {
       [...Array(count)].map((_, i) => <div className="circles" key={i}></div>)
    }
       </>
    );
}


export default D;