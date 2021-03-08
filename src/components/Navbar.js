import React from "react"
import {NavLink} from "react-router-dom";
import logo from "../assets/img/Logo.png"
import separator from "../assets/img/Separator.png"

export const Navbar = () => {

    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navbar-nav">

                    <li >
                        <NavLink to="/home" id="header-logo">
                            <img src={logo} alt="logo"/>
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/about">
                            <span>О музее</span>
                            <img src={separator} alt="" className="separator"/>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/news">
                            <span>Новости</span>
                            <img src={separator} alt="" className="separator"/>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/">
                            <span>События</span>
                            <img src={separator} alt="" className="separator"/>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contacts">
                            <span>Контакты</span>
                        </NavLink>
                    </li>

                    <li className="nav-item telephone">
                        <a href="tel: +7(383)200-03-71">
                            <span>+7 (383) 200-03-71</span>
                            <img src={separator} alt="" className="separator"/>
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}