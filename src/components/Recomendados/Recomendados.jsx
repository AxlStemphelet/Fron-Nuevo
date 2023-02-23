import React from 'react'
import './Recomendados.css'
import products from '../../data/products.json'
import RecItem from './RecItem'
const Recomendados = () => {
    return (
        <div className='recommended'>
            <h2 className='recommended-title'>Recomendaciones</h2>
            <div className='rec-ctn'>
            {
                products.map(product=>{
                    return(
                        <RecItem {...product} key={product.id}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Recomendados