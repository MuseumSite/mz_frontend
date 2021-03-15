import React from "react"
import {Header} from "../components/Header"
import {CarouselImage} from "../components/carousel/CarouselImage"
import {CarouselData} from "../components/carousel/CarouselData"
import {Footer} from "../components/Footer";
import {ButtonMain} from "../components/ButtonMain";

export const MainPage = () => {

    return (
        <>
            <Header/>
            <CarouselImage slides={CarouselData}/>

            <section className="about-block">
                <div className="about-content container-second">
                    <h1>Ирина Валентиновна Чувилова кандидат исторических наук</h1>
                    <p>"Мне очень нравится, как работает "Музей Заельцовка": у них уже есть свой зритель, свой
                        посетитель.
                        Он уже не может без этого музея, он считает его частью своей идентичности, частью локальной
                        культуры.
                        А это - главная задача для музея сегодня!" </p>
                    <ButtonMain textBtn="О музее"/>
                </div>
            </section>

            <section className="news-block">

            </section>

            <section className="map-block">

            </section>

            <Footer/>

        </>
    )
}