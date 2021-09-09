import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import Peliculas from '../components/Peliculas'
import Slider from '../components/Slider'



const AppBlock = () => {

    const [search, setSearch] = useState('')
    const [categoria, setCategoria] = useState('todas')

    return (
        <div>
            <NavBar estado={setSearch} cat={setCategoria} />
            <Slider />
            <Peliculas busqueda={search} cat2={categoria} />
        </div>
    )
}

export default AppBlock
