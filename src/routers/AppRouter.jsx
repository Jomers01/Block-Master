import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import InicioSesion from '../components/InicioSesion';
import Registrarse from '../components/Registrarse';
import AppBlock from '../containers/AppBlock';

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"  component={InicioSesion} />
                    <Route exact path="/registro" component={Registrarse} />
                    <Route exact path="/peliculas" component={AppBlock} />
                </Switch>
            </Router>
        )
    }
}
