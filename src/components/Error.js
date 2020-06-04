import React from 'react';
import styled from '@emotion/styled';

const ContenedorCenter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:1rem;
    color: red;
    text-align: center;
`;

const Error = ({msg}) =>{
    return(
        <ContenedorCenter>
            {msg}
        </ContenedorCenter>
    )
}

export default Error;