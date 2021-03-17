import React from "react"
import {Header} from "../components/Header"
import {CarouselImage} from "../components/carousel/CarouselImage"
import {CarouselData} from "../components/carousel/CarouselData"
import {Footer} from "../components/Footer";
import {ButtonMain} from "../components/ButtonMain";
import {NewsBlock} from "../components/news/NewsBlock";
import {NewsData} from "../components/news/NewsData";


export const MainPage = () => {
    const length = NewsData.length;

    return (
        <>
            <Header/>
            <CarouselImage slides={CarouselData}/>

            <section className="about-block-wrapper">
                <div className="about-content container-second">
                    <h1>Ирина Валентиновна Чувилова кандидат исторических наук</h1>
                    <p>"Мне очень нравится, как работает "Музей Заельцовка": у них уже есть свой зритель, свой
                        посетитель.
                        Он уже не может без этого музея, он считает его частью своей идентичности, частью локальной
                        культуры.
                        А это - главная задача для музея сегодня!" </p>
                    <ButtonMain textBtn="О музее" link="/about"/>
                </div>
            </section>

            <section className="news-block-wrapper container-second">
                <div className="news-block-title">Новости</div>
                {NewsData.map((newsItem, index) => {
                    return (
                        <NewsBlock
                            img={newsItem.image}
                            title={newsItem.title}
                            description={newsItem.description}
                            date={newsItem.date}
                        />
                    )
                })}
            </section>

            <section className="map-block-wrapper">
                <div className="container-second">
                    <div className="map-block-title">Интерактивная карта Заельцовского района</div>

                </div>
            </section>

            <Footer/>

        </>
    )
}