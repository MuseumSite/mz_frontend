import React from "react"
import {NavLink} from "react-router-dom"

import Vk from "../assets/iconSvg/vk.svg"
import Instagram from "../assets/iconSvg/Instagram.svg"
import Youtube from "../assets/iconSvg/Youtube.svg"
import Facebook from "../assets/iconSvg/Facebook.svg"
import separator from "../assets/img/Separator-footer.png"
import FooterLogo from "../assets/img/Footer-logo.png"

export const Footer = () => {

    return (
        <footer>
            <div className="social-networks">
                <ul className="social-nav-ul container">

                    <li className="social-nav-items">
                        <a href="https://vk.com/zaelmuseumnsk" target="_blank">
                            <img src={Vk} alt="vk"/>
                        </a>
                        <img src={separator} alt="" className="separator-footer"/>
                    </li>

                    <li className="social-nav-items">
                        <a href="https://www.instagram.com/zaelcovka_museum/" target="_blank">
                            <img src={Instagram} alt="vk"/>
                        </a>
                        <img src={separator} alt="" className="separator-footer"/>
                    </li>

                    <li className="social-nav-items">
                        <a href="https://www.youtube.com/channel/UCzx_a7ndkYJIkWLnUzLFm0g?view_as=subscriber"
                           target="_blank">
                            <img src={Youtube} alt="vk"/>
                        </a>
                        <img src={separator} alt="" className="separator-footer"/>
                    </li>

                    <li className="social-nav-items">
                        <a href="https://www.facebook.com/muzei.zaeltzovskij" target="_blank">
                            <img src={Facebook} alt="vk"/>
                        </a>
                    </li>

                    <li className="social-nav-items social-nav-items-text">
                        <p>Подпишитесь на рассылку новостей</p>
                    </li>

                    <li className="social-nav-items footer-input-wrapper">

                        <input type="text" placeholder="Ваш email" id="footer-input"/>
                        <button className="btn-right-arrow-input">
                            <svg className="btn-svg-input" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.7514 5.61057L0.608843 0.46784C0.431419 0.38727 0.21971 0.435269 0.0962848 0.587837C-0.0279978 0.740404 -0.0322834 0.957256 0.0859993 1.11411L3.75019 5.99971L0.0859993 10.8853C-0.0322834 11.0422 -0.0279978 11.2599 0.0954277 11.4116C0.178568 11.5153 0.302851 11.571 0.428848 11.571C0.489703 11.571 0.550559 11.5581 0.607986 11.5316L11.7506 6.38884C11.9031 6.31856 12 6.16684 12 5.99971C12 5.83257 11.9031 5.68086 11.7514 5.61057Z"
                                    fill="#474747"
                                />
                            </svg>
                        </button>

                    </li>

                </ul>
            </div>
            <div className="footer-links">
                <div className="footer-links-wrapper container">

                    <div className="footer-links-first-block">

                        <div className="contact-us">
                            <NavLink to="/home">
                                <span>Свзязаться с нами</span>
                            </NavLink>
                        </div>

                        <ul className="footer-links-ul">

                            <li className="footer-item">
                                <NavLink to="/home">
                                    <span>О музее</span>
                                </NavLink>
                            </li>

                            <li className="footer-item">
                                <NavLink to="/">
                                    <span>Новости</span>
                                </NavLink>
                            </li>

                            <li className="footer-item">
                                <NavLink to="/">
                                    <span>События</span>
                                </NavLink>
                            </li>

                            <li className="footer-item">
                                <NavLink to="/">
                                    <span>Документация</span>
                                </NavLink>
                            </li>

                            <li className="footer-item">
                                <NavLink to="/">
                                    <span>Для специалистов</span>
                                </NavLink>
                            </li>

                            <li className="footer-item">
                                <NavLink to="/">
                                    <span>Контакты</span>
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                    <div className="footer-links-second-block">
                        <div className="footer-links-logo">
                            <img src={FooterLogo} alt=""/>
                        </div>
                        <div className="footer-links-contacts">
                            <p><span>E-mail: </span>super.muzej@yandex.ru</p>
                            <p><span>Адрес: </span>Новосибирск, Красный пр. 179</p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}