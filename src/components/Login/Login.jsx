import React from 'react'
import { useState} from 'react';
import './Login.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {

    // Crear objeto con correo electrónico y contraseña
    const usuario = {

        email: "ejemplo@correo.com",
        password: "contrasena123"
        
    };

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar los campos de entrada
        if (email === '' && password === '' ) {
            alert('Por favor ingrese su nombre de usuario y contraseña');
            }else if (password.length < 6){  
                alert('La contraseña no tiene los caracteres suficientes');
            }else if (email !== usuario.email && password !== usuario.password){
                alert('Credenciales inválidas');
            }else if (email === usuario.email && password === usuario.password){
                        alert('Credenciales válidas');
            }else {
            console.log(email);
            console.log(password);
            // Enviar los datos del formulario al servidor de autenticación
            fetch('', {
                method: 'POST',
                body: JSON.stringify({ email: email, password: password }),
                headers: {
                'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                // Verificar la respuesta de autenticación del servidor
                if (data.success) {
                    // Redirigir a la página principal de la aplicación
                    window.location.href = '/home';
                } else {
                    alert('Credenciales de inicio de sesión no válidas');
                }
                })
                .catch((error) => console.log(error));
            }
        }
return (
    <div>
        <Header/>
        <div className='contenedorPadre'>
        <h2>Iniciar sesión</h2>
        <form className='inputs' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo Electronico</label>
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
            <button className='boton' type="submit">Iniciar sesión</button>
            <div className='paragrafo'>
                <p>¿Aún no tienes Cuenta?</p>
                <Link to="/register">
                        <a href='/register'>Registrate</a>
                </Link>
            </div> 
        </form>
        </div>
        <Footer/>
    </div>
)
}

export default Login