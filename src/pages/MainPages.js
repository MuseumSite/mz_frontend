import React, {useEffect} from "react"
import CarouselImage from "../components/carousel/CarouselImage"
import {CarouselData} from "../components/carousel/CarouselData"
import Footer from "../components/Footer"
import ButtonMain from "../components/ButtonMain"
import NewsBlock from "../components/news/NewsBlock"
import {NewsData} from "../components/news/NewsData"

function init() {
    let myMap, myPlacemark

    myMap = new ymaps.Map('map', {
        center: [55.059327, 82.912475],
        zoom: 12,
        controls: ['smallMapDefaultSet']
    }, {
        searchControlProvider: 'yandex#search'
    })

    myPlacemark = new ymaps.Placemark([55.067455, 82.881920], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    myMap.geoObjects.add(myPlacemark)
}

function MainPage() {
    useEffect(() => {
        ymaps.ready(init)
    }, [])

    return (
        <>
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
                            key={index}
                        />
                    )
                })}
            </section>

            <section className="map-block-wrapper">
                <div className="container-second">
                    <div className="map-block-title">Интерактивная карта Заельцовского района</div>
                    <div id="map"/>
                </div>
            </section>

            <Footer/>

        </>
    )
}

export default MainPage