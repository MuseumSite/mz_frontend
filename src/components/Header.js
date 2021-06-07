import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../assets/img/Logo.png"
import separator from "../assets/img/Separator.png"

function Header () {

    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-nav container">
                    <li>
                        <NavLink to="/" id="header-logo">
                            <img src={logo} alt="logo"/>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                            <span>Главная</span>
                            <img src={separator} alt="" className="separator"/>
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
                    {/*<li className="nav-item events">*/}
                    {/*    <NavLink to="/events">*/}
                    {/*        <span className="events-hover">События</span>*/}
                    {/*    </NavLink>*/}
                    {/*    <ul className="navbar-nav-events">*/}
                    {/*        <li className="nav-item-events">*/}
                    {/*            <NavLink to="/exhibitions">*/}
                    {/*                <span>Выставки</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item-events">*/}
                    {/*            <NavLink to="/guided_tours">*/}
                    {/*                <span>Экскурсии</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item-events">*/}
                    {/*            <NavLink to="/lessons">*/}
                    {/*                <span>Занятия</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*        <li className="nav-item-events">*/}
                    {/*            <NavLink to="/quests">*/}
                    {/*                <span>Квесты</span>*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <NavLink to="/contacts">
                            {/*<img src={separator} alt="" className="separator"/>*/}
                            <span>Контакты</span>
                        </NavLink>
                    </li>
                    <li className="nav-item telephone">
                        <a href="tel: +7(383)200-03-71">
                            <span>+7 (383) 200-03-71</span>
                            {/*<img src={separator} alt="" className="separator"/>*/}
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


