import React, { Component } from 'react'
import { Div, DivCred, DivIni, Input, A, P, DivFo, ButtonIni } from '../styles/InicioSesion'
import { Link } from 'react-router-dom';
import md5 from 'md5';

const urlUser = 'https://block-master-jomers.herokuapp.com/usuarios';

export default class InicioSesion extends Component {
    constructor(){
        super();
        this.state ={
            form: {
                email: '',
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

    //Iniciar sesion
    iniciarSesion = async() =>{
        //Llamo a mi API de usuarios
        const resp = await fetch(urlUser)
        const usrs = await resp.json()

        //Si lleno todos los campos
        if (this.state.form.email !== '' && this.state.form.clave !== '') {
            //Verifico que el usuario y correo sean correctos
            let verf = usrs.find(usr => usr.email.toLowerCase() === this.state.form.email.toLowerCase() && usr.clave === md5(this.state.form.clave))
            //Si el usuario y clave son correctos
            if (verf !== undefined) {
                alert(`Bienvenido ${verf.nombre} ${verf.apellido}`)
                this.state.login.push(verf);
                localStorage.setItem('login', JSON.stringify(this.state.login))
                this.props.history.push('/peliculas');
            //si el usuario o clave no son correctos
            }else{
                alert('Usuario o contraseña invalida')
            }

        //Si dejo algun campo vacio
        }else{
            alert('Debe llenar todos los campos')
        }


    }

    render() {
        return (
            <Div>
                <img src="https://i.ibb.co/h7VwcYf/logo-block-Buster.png" alt="" />
                <DivIni>
                    <h1>Iniciar Sesion</h1>
                    {/* <Button>Iniciar Sesion con Google</Button> */}
                </DivIni>
                <DivCred>
                    <Input type="text" placeholder="Correo Electronico" name="email" onChange={this.handleChange} />
                    <Input type="password" placeholder="Contraseña" name="clave" onChange={this.handleChange} />
                    <ButtonIni onClick={this.iniciarSesion}><img src="https://i.ibb.co/ygrkxxW/flecha-correcta.png" alt="" /></ButtonIni>
                </DivCred>
                <DivFo>
                    <P>Aun no estas registrado. <Link to="/registro"><A>Click aqui!</A></Link></P>
                </DivFo>
            </Div>
        )
    }
}
