import React from 'react'
import { Link } from 'react-router-dom'
import "./Avatar.css"

const Avatar = () => {

    const usuarioAvatar = {

        name: "Bruno",
        lastname: "Rodriguez"
        
    };

return (
    <div className="container-1">
        <div className='Iniciales'>
            <span>{`${usuarioAvatar.name.substring(0, 1)}${usuarioAvatar.lastname.substring(0, 1)}`}</span>
        </div>
        <p className='P-in'>
            <span className='Nombre-ctm'>Hola,</span>
            <Link to="/">
                <i class="fa fa-times" aria-hidden="true"></i>
            </Link>
            <br />            
            {usuarioAvatar.name} {usuarioAvatar.lastname}
        </p>
        
    </div>

)
}

export default Avatar