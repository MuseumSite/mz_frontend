import React from "react"
import Vk from "../assets/iconSvg/vk.svg"
import Instagram from "../assets/iconSvg/Instagram.svg"
import Youtube from "../assets/iconSvg/Youtube.svg"
import Facebook from "../assets/iconSvg/Facebook.svg"
import separator from "../assets/img/Separator-footer.png";

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
                        <a href="https://www.youtube.com/channel/UCzx_a7ndkYJIkWLnUzLFm0g?view_as=subscriber" target="_blank">
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

                    <li className="social-nav-items">
                        <input type="text" placeholder="Ваш email" id="footer-input"/>
                    </li>

                </ul>
            </div>
            <div className="footer-links">
                <div className="container">

                </div>
            </div>
        </footer>
    )
}