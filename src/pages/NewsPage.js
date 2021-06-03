import React, {useEffect} from "react"
import useHttp from "../hooks/http.hook"
import useMessage from "../hooks/message.hook"
import NewsBlock from "../components/news/NewsBlock"
import newsItem2 from "../assets/img/n2.jpg";

function NewsPage() {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const authData = {
        email: 'adm@test.ru',
        password: 'ad4123asd'
    }

    const newsRegisterHandler = async () => {
        try {
            const data = await request('http://127.0.0.1:5000/api/auth/register', 'POST', authData)
            console.log("Data ", data)
        } catch (e) {
        }
    }

    const test = {
        title: 'В этот день, в 1924 году была создана Сибирская детская ко миссия.',
        date: '09.26.2020',
        description: 'Вопрос борьбы с нищенством и беспризорностью несовершеннолетних имеет свою историю. Уже в конце XVII в. слышатся жалобы на ужасное положение нищенствующих детей, «которых множество великое на улицах бродит и ничему их не учат, а возрастут, кроме воровства от таких бродячих людей невозможно быти».'
    }

    const newsHandler = async () => {
        try {
            const data = await request('http://127.0.0.1:5000/api/news/add', 'POST', test)
            console.log("Data ", data)
        } catch (e) {
        }p2WXgZyF
    }

    const viewHandler = async () => {
        try {
            const data = await request('http://127.0.0.1:5000/api/news/all')
            console.log("Data: ", data)
        } catch (e) {
        }
    }

    return (
        <div>
            <section className="main news-block-wrapper container-second">
                <h1>Новости</h1>
                <NewsBlock/>
                <NewsBlock/>
                <NewsBlock/>
                <button
                    onClick={newsRegisterHandler}
                    disabled={loading}
                >
                    Click
                </button>
                <button
                    onClick={newsHandler}
                    disabled={loading}
                >
                    Take
                </button>
                <button onClick={viewHandler}>
                    Посмотреть
                </button>
            </section>
        </div>
    )
}

export default NewsPage