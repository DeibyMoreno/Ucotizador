export function ObtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

export function CalcularMarca(marca){
    let incremento;

    switch(marca){
        case 'Americano':
            incremento = 1.15;
            break;
        case 'Europeo':
            incremento = 1.30;
            break;
        case 'Asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function ObtenerPlan(plan){
    return (plan == 'basico') ? 1.20 : 1.50;
}