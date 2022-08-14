//paduodamas senasis state'as (tarsi setState vidus) 
function count(state, action) {

    let stateCopy = state; //dazniausiai nusikopijuojam state'a. Jei butu masyvas, reiketu su spread'u ir tt.



    switch (action.type) {
        case 'plus_one':
            stateCopy++;
            break;
        case 'minus_one':
            stateCopy--;
            break;
        case 'reset':
            stateCopy = 0;
            break;
        case 'add_some':
            action.payload = action.payload === '' ? 0 : parseInt(action.payload);
            action.payload = isNaN(action.payload ) ? 0 : action.payload;
            stateCopy = stateCopy + action.payload;
            break;
        case 'rem_some':
            action.payload = action.payload === '' ? 0 : parseInt(action.payload);
            action.payload = isNaN(action.payload ) ? 0 : action.payload; //patikrinam ar skaicius (GERA FUNKCIJA PASITIKRINIMUI)
            stateCopy = stateCopy - action.payload;
            break;
        default:
    }



    return stateCopy;
}

export default count;