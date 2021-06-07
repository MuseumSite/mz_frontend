import React, {useEffect, useState} from "react"
import useHttp from "../hooks/http.hook"
import useMessage from "../hooks/message.hook"
import NewsBlock from "../components/news/NewsBlock"
import newsItem2 from "../assets/img/n2.jpg";

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


    // const test = {
    //     title: 'В этот день, в 1924 году была создана Сибирская детская ко миссия.',
    //     date: '2020.09.26',
    //     img: 'http://localhost:5000/static/slide1.jpg',
    //     description: 'Вопрос борьбы с нищенством и беспризорностью несовершеннолетних имеет свою историю. Уже в конце XVII в. слышатся жалобы на ужасное положение нищенствующих детей, «которых множество великое на улицах бродит и ничему их не учат, а возрастут, кроме воровства от таких бродячих людей невозможно быти».'
    // }

    // const newsHandler = async () => {
    //     try {
    //         const data = await request('http://127.0.0.1:5000/api/news/add', 'POST', test)
    //         console.log("Data ", data)
    //     } catch (e) {
    //     }
    // }

    async function getData() {
        try {
            let block = await request('http://127.0.0.1:5000/api/news/all')
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
                            date={moment(newsItem.date_news).format('DD.MM.YY')}
                            key={index}
                        />
                    )
                })}

                {/*<button*/}
                {/*    onClick={newsHandler}*/}
                {/*    disabled={loading}*/}
                {/*>*/}
                {/*    Take*/}
                {/*</button>*/}
            </section>
        </div>
    )
}

export default NewsPage