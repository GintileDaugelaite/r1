//paduodamas senasis state'as (tarsi setState vidus) 
function square(state, action) {

    let stateCopy = [...state]; //dazniausiai nusikopijuojam state'a. Jei butu masyvas, reiketu su spread'u ir tt.


    switch (action.type) {
        case 'add':
            action.payload = action.payload === '' ? stateCopy.length : parseInt(action.payload);
            action.payload = isNaN(action.payload) ? stateCopy.length : action.payload;
            stateCopy.push({ number: action.payload, show: true });
            break;
        case 'minus':
            stateCopy.shift('');
            break;
        case 'clear':
            stateCopy = [];
            break;
        case 'min_max':
            stateCopy.sort((a, b) => a.number - b.number);
            break;
        case 'max_min':
            stateCopy.sort((a, b) => b.number - a.number);
            break;
        case 'even':
            stateCopy = stateCopy.map(s => s.number % 2 ? { ...s, show: true } : { ...s, show: false })
            break;
        case 'odd':
            stateCopy = stateCopy.map(s => s.number % 2 ? { ...s, show: false } : { ...s, show: true })
            break;
        case 'all':
            stateCopy = stateCopy.map(s => ({ ...s, show: true }));
            break;
        default:
    }

    return stateCopy;
}

export default square;