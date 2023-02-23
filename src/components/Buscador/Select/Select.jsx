import React from 'react'
import findIcon from '../../../assets/find.png'
import './Select.css'
import cities from '../../../data/cities.json'
const Select = () => {
    return (
            <select name='ciudades'>
                <option value="">¿A dónde vamos?</option>
                {
                    cities.map(city=>{
                        return(
                        <option key={city.id} value={city.id}>{city.city} - {city.country}</option>
                        )
                    })
                }
            </select>
    )
}

export default Select