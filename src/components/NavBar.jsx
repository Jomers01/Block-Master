import React from 'react'
import { A, Buttonn, DivNav, Img, Input, Li } from '../styles/NavBar'

const NavBar = ({estado, cat}) => {

    const handleSubmit = async(e)=>{
        e.preventDefault()
    }

    const handleChange = (e)=>{
        estado(e.target.value)
    }

    const categorie = (e) =>{
        cat(e.target.name)
    }

    const cerrarSesion = () =>{
        localStorage.setItem('login', "[]")
        window.location.assign("Block-Master")
    }

    return (
        <DivNav>
            <img src="https://i.ibb.co/h7VwcYf/logo-block-Buster.png" alt="" />
            <ul>
                <Li><A name="todas" onClick={categorie}>Todas</A></Li>
                <Li><A name="top"   onClick={categorie}>Más valoradas</A></Li>
                <Li><A name="bot"   onClick={categorie}>Menos valoradas</A></Li>
                <Li><A name="bot"   onClick={()=>window.location.assign("perfil")}>Perfil</A></Li>
                <Li><A name="bot"   onClick={cerrarSesion}>Cerrar Sesion</A></Li>
            </ul>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Buscar tu pelicula favorita" onChange={handleChange} />
                <Buttonn><Img src="https://i.ibb.co/GPqKqBp/Vector.png" alt="" width="12px" /></Buttonn>
            </form>
        </DivNav>
    )
}

export default NavBar
