import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background: #1d1b23;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
  height: 40px;
  position: fixed;
  width:100%;
  z-index:100;
`;

const TituloHeader = styled.h6`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;


const Header = ({titulo})=>{
    return(
        <ContenedorHeader>
            <TituloHeader>{titulo}</TituloHeader>
        </ContenedorHeader>
    )
}

export default Header;