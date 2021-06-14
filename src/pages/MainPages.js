import React, {useEffect, useState} from "react"
import CarouselImage from "../components/carousel/CarouselImage"
import {CarouselData} from "../components/carousel/CarouselData"
import Footer from "../components/Footer"
import ButtonMain from "../components/ButtonMain"
import NewsBlock from "../components/NewsBlock"
import useHttp from "../hooks/http.hook"
import moment from "moment";
import useMessage from "../hooks/message.hook";
import Map from "../components/Map";

function MainPage() {
    const message = useMessage()
    const [myData, setData] = useState([{title: "", description_news: "", img_path: "", date_news: ""}])
    const {loading, request, error, clearError} = useHttp()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    async function getData() {
        try {
            let block = await request('http://78.40.219.36:5000/api/news/all')
            let result = block.sort(function (a, b) {
                let c = new Date(a.date_news)
                let d = new Date(b.date_news)
                return d - c
            }).slice(0, 2)
            setData(result)
        } catch (e) {
        }
    }

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
                {myData.map((newsItem, index) => {
                    return (
                        <NewsBlock
                            img={newsItem.img_path}
                            title={newsItem.title}
                            description={newsItem.description_news}
                            date={moment(newsItem.date_news).format('DD.MM.YYYY')}
                            key={index}
                        />
                    )
                })}
            </section>
            <Map/>
            <Footer/>
        </>
    )
}

export default MainPage