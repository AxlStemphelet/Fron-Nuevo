import React from 'react'
import Buscador from '../Buscador/Buscador'
import Categorias from '../Categorias/Categorias'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Recomendados from '../Recomendados/Recomendados'

const Home = () => {
    return (
    <div>
        <Header/>
        <Buscador/>
        <Categorias/>
        <Recomendados/>
        <Footer/>
    </div>
    )
}

export default Home