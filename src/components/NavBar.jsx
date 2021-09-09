import React from 'react'
import { A, Button, DivNav, Img, Input, Li } from '../styles/NavBar'


const NavBar = ({estado, cat}) => {

    const handleSubmit = async(e)=>{
        e.preventDefault()
    }

    const handleChange = (e)=>{
        estado(e.target.value)
        // console.log(busqueda);
    }

    const categorie = (e) =>{
        cat(e.target.name)
    }

    return (
        <DivNav>
            <img src="https://i.ibb.co/h7VwcYf/logo-block-Buster.png" alt="" />
            <ul>
                <Li><A name="todas" onClick={categorie}>Todas</A></Li>
                <Li><A name="top"   onClick={categorie}>Más valoradas</A></Li>
                <Li><A name="bot"   onClick={categorie}>Menos valoradas</A></Li>
            </ul>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Buscar tu pelicula favorita" onChange={handleChange} />
                <Button><Img src="https://i.ibb.co/GPqKqBp/Vector.png" alt="" width="12px" /></Button>
            </form>
        </DivNav>
    )
}

export default NavBar
