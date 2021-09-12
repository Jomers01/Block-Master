import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Peliculas from '../components/Peliculas'
import Slider from '../components/Slider'
import { App } from '../styles/MoviesS'

const AppBlock = () => {

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('login'));
        if (local === null) {
            window.location.assign("Block-Master")
        }else if (local.length === 0) {
            window.location.assign("Block-Master")
        }
    }, [])

    const [search, setSearch] = useState('')
    const [categoria, setCategoria] = useState('todas')
    
    return (
        <App>
            <NavBar estado={setSearch} cat={setCategoria} />
            <Slider />
            <Peliculas busqueda={search} cat2={categoria} />
        </App>
    )
}

export default AppBlock