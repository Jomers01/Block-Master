import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Peliculas from '../components/Peliculas'
import Slider from '../components/Slider'

export default class AppBlock extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Slider />
                <Peliculas />
            </>
        )
    }
}