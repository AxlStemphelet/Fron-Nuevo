import React from 'react'
import './Buscador.css'
import Calendar from './Calendar/Calendar'
import Select from './Select/Select'
const Buscador = () => {
return (
    <div className='buscador'>
        <h1>Busca las mejores ofertas en Alquiler de Autos</h1>
        <form className='form-buscador' action='submit'>
            <Select/>
            <Calendar/>
            <button className='btn-buscar'>Buscar</button>
        </form>
    </div>
)
}

export default Buscador