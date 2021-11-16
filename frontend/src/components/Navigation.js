import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">
                A propos
            </NavLink>
            <NavLink exact to="/a-calendrier" activeClassName="nav-active">
                Calendrier
            </NavLink>
            <NavLink exact to="/a-classements" activeClassName="nav-active">
                Classements
            </NavLink>
            <NavLink exact to="/a-equipes" activeClassName="nav-active">
                Equipes
            </NavLink>
            <NavLink exact to="/a-pilotes" activeClassName="nav-active">
                Pilotes
            </NavLink>
        </div>
    )

}

export default Navigation;