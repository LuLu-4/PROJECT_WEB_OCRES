import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/navigation.css';
import logo from '../A-logo.png';


const Navigation = () => {
    return (
        <div className="Navigation">
            <img src={logo} width="100" height="50" className="nav-active-logo" />
            <NavLink exact to="/" className="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos" className="nav-active">
                A propos
            </NavLink>
            <img src={logo} width="100" height="50" className="nav-active-logo" />
        </div>
    )

}

export default Navigation;