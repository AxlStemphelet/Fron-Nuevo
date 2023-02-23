import React from 'react'
import { useState } from 'react';
import './Register.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            // Validar los campos de entrada
            if (
            firstName === '' ||
            lastName === '' ||
            email === '' ||
            password === '' ||
            confirmPassword === ''
            ) {
            alert('Por favor complete todos los campos');
            } else if (password !== confirmPassword) {
            alert('La contraseña y la confirmación de contraseña no coinciden');
            } else {
            // Enviar los datos del formulario al servidor de registro
            fetch('', {
                method: 'POST',
                body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                }),
                headers: {
                'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                // Verificar la respuesta de registro del servidor
                if (data.success) {
                    // Redirigir a la página principal de la aplicación
                    window.location.href = '/home';
                } else {
                    alert('Error al registrar el usuario');
                }
                })
                .catch((error) => console.log(error));
            }
        };
        

return (
    <div>
        <Header/>
        <div className='contenedorForm'>
                <h2>Crear Cuenta</h2>
                <form className='inputsV2' onSubmit={handleSubmit}>
                <div className='nombreApellido'>
                    <div>
                        <label htmlFor="firstName">Nombre</label>
                        <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Apellido</label>
                        <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                </div>
                <div className='correoContraseña'>
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirmar contraseña</label>
                        <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>
                </div>
                <button type="submit">Crear cuenta</button>
                <div className='paragrafoRegister'>
                    <p>¿Ya tienes una Cuenta?</p>
                    <Link to="/login">
                        <a href='/login'>Iniciar sesión</a>
                    </Link>
                    
                </div> 
            </form>
        </div>
        <Footer/>
    </div>
    )
}

export default Register