import React, {useState, useEffect} from 'react'
import { Btn, Btn1, Div, Form, H1, H3, Img, Span } from '../styles/AniadirS'
import axios from 'axios'

const Perfil = () => {
    //Tomamos la info del usuarion en logeado 
    const usuario = JSON.parse(localStorage.getItem('login'))

    //Estados
    const [perfil, setPerfil] = useState([])
    const [editar, setEditar] = useState({
        nombre: '',
        apellido: '',
        email: '',
        phone: '',
        clave: usuario[0].clave
    })

    //Api de usuarios
    const urlUser = 'https://block-master-jomers.herokuapp.com/usuarios';

    const handleChange = (e) =>{
        setEditar({
            ...editar,
            [e.target.name]: e.target.value
        });
    }

    const actualizarDatos = async(e) =>{
        e.preventDefault()
        axios.put(`${urlUser}/${usuario[0].id}`, editar)
        .then(()=> window.location.assign("perfil"))
        .catch(()=> alert('No se pudo editar el perfil'))
    }

    const borrarPerfil = async(e) =>{
        e.preventDefault()
        axios.delete(`${urlUser}/${usuario[0].id}`)
        .then(()=>{
            localStorage.setItem('login', "[]")
            window.location.assign("Block-Master")
        })
    }

    const atras = () =>{
        window.location.assign("peliculas")
    }

    useEffect(() => {
        fetch(urlUser)
        .then(resp => resp.json())
        .then(usr => {
            setPerfil(usr.find(u => u.id === usuario[0].id))
        })
    }, [usuario])

    return (
        <Div>
            <Span onClick={atras}><img src="https://i.ibb.co/31y5Btg/flecha-hacia-atras.png" alt="atras" /></Span>
            <Img src="https://i.ibb.co/h7VwcYf/logo-block-Buster.png" alt="" />
            <H1>Perfil</H1>
            <H3>Hola {perfil.nombre} {perfil.apellido}</H3>
            <Form>
                <label htmlFor="nombre">Nombres:</label>
                <input id="nombre" type="text" name="nombre" placeholder={perfil.nombre} onChange={handleChange} />
                <label htmlFor="apellido">Apellidos:</label>
                <input id="apellido" type="text" name="apellido" placeholder={perfil.apellido } onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder={perfil.email} onChange={handleChange} />
                <label htmlFor="phone">Telefono:</label>
                <input id="phone" type="tel" name="phone" placeholder={perfil.phone} onChange={handleChange} />
                <label htmlFor="phone">Clave:</label>
                <Btn onClick={actualizarDatos}>Editar Perfil</Btn>
                <Btn1 onClick={borrarPerfil}>Borrar Cuenta</Btn1>
            </Form>
        </Div>
    )
}

export default Perfil