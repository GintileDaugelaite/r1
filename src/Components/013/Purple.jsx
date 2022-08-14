
function Purple({ sq, setSq, shape}) {

const remove = id => {
setSq(s => s.filter(sq => sq.id !== id));
}


    return (
        <div className="view-container">
            {
                sq.map(s => (s.show ? 
                <div className='sq' key={s.id} style={{ 
                    backgroundColor: s.color,
                    width: s.size + 'px',
                    height: s.size + 'px'
                    }} >{s.text}
                    <span className="id-number">{s.id}</span>
                    <button className="red" onClick={() => remove(s.id)}>Delete</button>
                </div> : null
                ))
            }
        </div>
    );   
}

export default Purple;