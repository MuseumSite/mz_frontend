import React, {useEffect, useState} from "react"
import useHttp from "../hooks/http.hook"
import useMessage from "../hooks/message.hook"
import NewsBlock from "../components/NewsBlock"
import Footer from "../components/Footer";

const moment = require('moment');

function NewsPage() {
    const message = useMessage()
    const [myData, setData] = useState([{title: "", description_news: "", img_path: "", date_news: ""}])
    const {loading, request, error, clearError} = useHttp()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            let block = await request('http://78.40.219.36:5000/api/news/all')
            let result = block.sort(function (a, b) {
                let c = new Date(a.date_news)
                let d = new Date(b.date_news)
                return d - c
            })
            setData(result)
        } catch (e) {
        }
    }

    return (
        <div>
            <section className="main news-block-wrapper container-second">
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
            <Footer/>
        </div>
    )
}

export default NewsPage