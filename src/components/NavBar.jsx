import React, { Component } from 'react'
import { A, Button, DivNav, Img, Input, Li } from '../styles/NavBar'

export default class NavBar extends Component {
    render() {
        return (
            <DivNav>
                <img src="https://i.ibb.co/h7VwcYf/logo-block-Buster.png" alt="" />
                <ul>
                    <Li><A href="/">Todas</A></Li>
                    <Li><A href="/">Más valoradas</A></Li>
                    <Li><A href="/">Menos valoradas</A></Li>
                </ul>
                <div>
                    <Input type="text" placeholder="Buscar tu pelicula favorita" />
                    <Button><Img src="https://i.ibb.co/GPqKqBp/Vector.png" alt="" width="12px" /></Button>
                </div>
            </DivNav>
        )
    }
}
