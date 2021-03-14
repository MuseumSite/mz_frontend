import React from "react"
import {Header} from "../components/Header"
import {ImageCarousel} from "../components/ImageCarousel"
import {CarouselData} from "../components/CarouselData"



export const MainPage = () => {
    return (
        <>
            <Header/>
            <ImageCarousel slides={CarouselData}/>
            <section className="about-block">
                <div className="about-content container-second">
                    <h1>Ирина Валентиновна Чувилова кандидат  исторических наук</h1>
                    <p>"Мне очень нравится, как работает "Музей Заельцовка": у них уже есть свой зритель, свой посетитель.
                        Он уже не может без этого музея, он считает его частью своей идентичности, частью локальной культуры.
                        А это - главная задача для музея сегодня!" </p>
                </div>

            </section>

        </>
    )
}