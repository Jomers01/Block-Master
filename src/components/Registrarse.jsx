import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Div, DivFo, Input, Span } from '../styles/Registrarse';
import axios from 'axios';
import uuid from 'react-uuid';
import md5 from 'md5';

const urlUser = 'https://block-master-jomers.herokuapp.com/usuarios';

export default class Registrarse extends Component {
    //Mi constructor
    constructor(){
        super();
        this.state = {
            data: [],
            form: {
                id: '',
                nombre: '',
                apellido: '',
                email: '',
                phone: '',
                clave: ''
            },
            login: []
        }
    }

    componentDidMount(){  
        let local = JSON.parse(localStorage.getItem('login'));
        if (local === null) {
            localStorage.setItem('login', "[]")
        }else if (local.length) {
            this.props.history.push('/peliculas')
        }
    }

    //Funcion para capturar los cambios y capturarlos
    handleChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    //Funcion para prevenir el evento por defecto
    handleSubmit = e =>{
        e.preventDefault();
    }

    //Funcion para agregar el usuario al registro
    registroUsuario = async ()=>{
        //Pedimos la data actualizada de mis usuarios
        const resp = await fetch(urlUser)
        const usr = await resp.json()
        
        //Validamos que todos los campos esten llenos
        if (this.state.form.nombre !== '' && this.state.form.apellido !== '' && this.state.form.email !== '' && this.state.form.phone !== '' && this.state.form.clave !== '') {
            //recorro la API verificando si hay un correo igual
            let verf = usr.find(usrs => usrs.email.toLowerCase() === this.state.form.email.toLowerCase())

            //Si hay un correo igual le notifico que ese correo ya se uso
            if (verf !== undefined) {
                alert('Correo ya regitrado');

            //Si no entonces lo dejo registrarse
            }else{
                //Realizamos la peticion post
                await axios.post(urlUser,{
                    id: uuid,
                    nombre: this.state.form.nombre,
                    apellido: this.state.form.apellido,
                    email: this.state.form.email,
                    phone: this.state.form.phone,
                    clave: md5(this.state.form.clave)
                })
                .then(resp =>{
                    alert("usuario registrado")
                })
                .catch(error =>{
                    console.log(error.message);
                })

                //Pedimos la data actualizada de mis usuarios
                const resp2 = await fetch(urlUser)
                const usr2 = await resp2.json()

                //Traemos el objeto de nuestro nuevo usuario registrado
                let verf2 = usr2.find(usrs2 => usrs2.email.toLowerCase() === this.state.form.email.toLowerCase())
                //actualizo el estado de mi logion con la info del nuevo usuario registrado
                this.state.login.push(verf2);
                localStorage.setItem('login', JSON.stringify(this.state.login))
                this.props.history.push('/peliculas');
            }

        //Si no le digo que esta vacio los campos
        }else{
            alert("Debe llenar todos los campos");
        }
    }

    render() {
        return (
            <Div>
                <div>
                    <img src="https://i.ibb.co/h7VwcYf/logo-block-Buster.png" alt="" />
                    <h1>Registro</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" placeholder="Nombres" name="nombre" onChange={this.handleChange} required />
                    <Input type="text" placeholder="Apellidos" name="apellido" onChange={this.handleChange} required />
                    <Input type="email" placeholder="Correo Electronico" name="email" onChange={this.handleChange} required />
                    <Input type="phone" placeholder="Teléfono" name="phone" onChange={this.handleChange} required />
                    <Input type="password" placeholder="Contraseña" name="clave" onChange={this.handleChange} required />
                    <Button type="submit" onClick={this.registroUsuario}>Registrarse</Button>
                </form>
                <DivFo>
                    <Link to="/block-master"><Span>¿Ya tienes cuenta?</Span></Link>
                </DivFo>
            </Div>
        )
    }
}
