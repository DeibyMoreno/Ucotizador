import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    padding: 1rem;
    text-align: center;
    color: #fff;
    margin-top:1rem;
    background: #49494b;
`;

const Resumen = ({cotizacion})=>{

    const {marca, year, plan} = cotizacion;
    if(marca === '' || year === '' || plan === '') return null; 

    return(
        
        <Contenedor>
            <h1>Resumen de Cotizacion</h1>
            <ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año del auto: {year}</li>
            </ul>
        </Contenedor>
    );
}

export default Resumen;