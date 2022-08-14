function Shape({forma}) {

    return (
        <div className="shape" style={
            {
                borderRadius: forma === 'square' ? '0' : forma === 'circle' ? '50%' : null
            }
        }></div>
    );

}


export default Shape;