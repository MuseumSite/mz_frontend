import React from "react"
import Footer from "../components/Footer";
import schedule from '../assets/img/3RgABDQCncM.jpg'

function AboutPage() {
    return (
        <div>
            <section className="main about-page-wrapper">
                <div className="about-content container-second">
                    <h1>Ирина Валентиновна Чувилова кандидат исторических наук</h1>
                    <p>"Мне очень нравится, как работает "Музей Заельцовка": у них уже есть свой зритель, свой
                        посетитель.
                        Он уже не может без этого музея, он считает его частью своей идентичности, частью локальной
                        культуры.
                        А это - главная задача для музея сегодня!" </p>
                </div>
                <div className="about-raw">
                    <div className="about-content container-second about-raw-height">
                        <h2>Входной билет</h2>
                        <div className="ticket-content">
                            <p>Взрослые — 70 руб;</p>
                            <p>Школьники, пенсионеры, студенты — 50 рублей.</p>
                            <p>Стоимость услуг экскурсовода — 200 рублей.</p>
                            <a href="https://vk.com/market-32408934" target="_blank">Прейскурант цен</a>
                        </div>
                    </div>
                    <div className="about-content container-second about-raw-height">
                        <h2>График работы</h2>
                        <img src={schedule} alt="schedule" id="schedule"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default AboutPage