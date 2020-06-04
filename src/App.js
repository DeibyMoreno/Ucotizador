import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Background from './img/cotizador.jfif';
import Background2 from './img/back2.jfif';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
    margin:0 auto;
`;

const ContenedorCenter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:3rem;
`;

const ContenedorForm = styled.div`
    padding: 10px;
    margin-top: 20px;
    border-color: #584f9b;
    border-width: 1px;
    border-style: ridge;
    background-color: transparent;
    color: #fff;
    text-align: center;
`;

function App() {

  const [cotizacion, setCotizacion] = useState({
    valor: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const {valor, datos} = cotizacion;
  const [spinner, setSpinner] = useState(false);

  return (
    <Fragment>
      <Header titulo="Cotizador de seguros"/>
      <div className="container">
        <div className="row" style={{height:'100vh'}}>
          <div style={{position:'fixed', height: '100%', width: '100%', top:'62px',left:'0px'}}>
            <img src={Background} style={{objectFit:'cover',width:'100%',height:'100%'}}/>
          </div>
          <div style={{height: '90vh', whidth: '100%', display:'flex',alignItems:'center', justifyContent:'center', position:'relative'}}>
            <div className="six columns" style={{color:'black', fontWeight:'bold', textAlign:'center', fontSize:'30px'}}>
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{height:'100vh'}}>
     
        <div style={{height: '100%',objectFit:'contain', width:'100%',display:'flex', alignItems:'center', justifyContent:'center',position:'relative', backgroundImage: `url(${Background2})`}}>
          <div className="six columns">
            <ContenedorForm>
              <Formulario setCotizacion={setCotizacion} setSpinner={setSpinner}/>
              {
                (spinner)
                ?(
                  <div style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
                    <Spinner />
                  </div>
                ):(
                  <Fragment> 
                    <Resumen cotizacion={datos}/>
                    <Resultado valor={valor}/>
                  </Fragment>
                )
              }
              
              
            </ContenedorForm>
            
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
