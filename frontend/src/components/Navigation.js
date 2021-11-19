import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/navigation.css';
import logo from '../formula-1-logo.png';


const Navigation = () => {
    return (
        <div className="Navigation">
            <img src={logo} width="100" height="50" />
            <NavLink exact to="/" className="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/a-propos" className="nav-active">
                A propos
            </NavLink>
            <NavLink exact to="/a-calendrier" className="nav-active">
                Calendrier
            </NavLink>
            <NavLink exact to="/a-classements" className="nav-active">
                Classements
            </NavLink>
            <NavLink exact to="/a-equipes" className="nav-active">
                Equipes
            </NavLink>
            <NavLink exact to="/a-pilotes" className="nav-active">
                Pilotes
            </NavLink>
        </div>
    )

}

export default Navigation;