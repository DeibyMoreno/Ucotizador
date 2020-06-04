import React, {useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import {ObtenerDiferenciaYear, CalcularMarca, ObtenerPlan} from '../helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #49494b;
    font-size: 19px;
    font-weight: bold;
    width: 100%;
    color: #FFFF;
    border: none;
    margin-top:2rem;
    height: 50px;
    text-transform: uppercase;

    &:hover{
        background-color: #606061;
        cursor:pointer;
    }
`;

const Formulario = ({setCotizacion, setSpinner})=>{
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    const {marca, year, plan} = datos;

    const obtnerInformacion = e =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    }

    const cotizarSeguro = e =>{
        e.preventDefault();
        if(marca.trim() === '' || year.trim() === '' || plan === ''){
            setError(true);
            return
        }
        setError(false);

        //base para la app
        let base = 2000;
        
        //Obtener la diferencia de años
        const diff = ObtenerDiferenciaYear(year);

        //Por cada año hay que restar el 3%
        base-=((diff * 3)*base)/100;
        
        //Si la marca es Europeo 30% Americano 15% Asiatico 5% incremento
        base = CalcularMarca(marca) * base;
        
        //Si el plan es basico 20% si es completo el 50%
        const descuento = ObtenerPlan(plan);
        base =parseFloat(base * descuento).toFixed(2);

        setSpinner(true);

        setTimeout(()=>{
            setSpinner(false);
            setCotizacion({
                valor:base,
                datos
            })
    
            setDatos({
                marca: '',
                year: '',
                plan: ''
            });
        },2000);
    }

    return(
            <form onSubmit={cotizarSeguro}>
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtnerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Americano">Americano</option>
                        <option value="Europeo">Europeo</option>
                        <option value="Asiatico">Asiatico</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Año</Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={obtnerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Plan</Label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan == "basico"}
                        onChange={obtnerInformacion}
                    />Básico
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="completo"
                        checked={plan == "completo"}
                        onChange={obtnerInformacion}
                    />Completo
                </Campo>
                <Button type="submit">Cotizar</Button>

                { error ? <Error msg="Todos los datos son obligatorios" /> : null }
            </form>
        
    )
}

export default Formulario;