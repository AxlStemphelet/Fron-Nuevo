import React from 'react'
import "./Header.css"
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom'

const Header = () => {
return (
    
    <div>
        <header className='header'>
            <nav>
                <Link to="/">
                    <div className='contenedorIzquierda'>
                        <img src={logo} alt="logo"/>
                        <span className='span'>Sentite como en tu hogar</span>
                    </div>
                </Link>
                <div className='contenedorDerecha'>
                    <Link to="/register">
                        <button className='bot1'>Crear cuenta</button>
                    </Link>
                    <Link to="/login">
                        <button className='bot2'>Iniciar sesión</button>
                    </Link>
                </div>
            </nav>
        </header>
    </div>

)
}

export default Header