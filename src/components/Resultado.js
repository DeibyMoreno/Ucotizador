import React from 'react';
import styled from '@emotion/styled';
import { render } from '@testing-library/react';

const Texto = styled.p`
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({valor})=>{
    return(
            (valor !== 0)
                ?<Texto>El total es: ${valor}</Texto>
                :null
    );
}

export default Resultado;