import React from 'react'
import categorias from '../../data/categorias.json'
import CatItem from './CatItem'
import './Categorias.css'
const Categorias = () => {
    return (
        <div className='categories'>
            <h2 className='categories-title'>Buscar por tipo de Auto</h2>
            <div className='categories-ctn'>
                {
                    categorias.map(categoria=>{
                        return(
                            <CatItem key={categoria.id} {...categoria}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categorias