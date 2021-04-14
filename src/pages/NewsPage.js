import React, {useEffect} from "react"
import {Header} from "../components/Header";
import {PageInDevelopment} from "./PageInDevelopment";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const NewsPage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()

    useEffect(()=> {
        message(error)
        clearError()
    }, [error, message, clearError])

    const authData = {
        email: 'pa@mail.ru',
        password: 'ad4123asd'
    }
    
    const newsHandler = async () => {
        try {
            // const data = await request('http://localhost:5000/api/auth/register', 'POST', authData)
            const data = await fetch('http://localhost:5000/api/auth/register', {
                method: 'post',
                body: JSON.stringify({email: 'max@test.com', password: '12345'}),
                headers: {
                    'content-type': 'application/json',
                }
            })
            console.log("Data ", data)
        } catch (e) {}
    }

    return (
        <div>
            <Header/>
            <section className="main">
                <h1>News Page</h1>
                <button
                    onClick={newsHandler}
                    disabled={loading}
                >
                    Click
                </button>
            </section>
        </div>
        // <PageInDevelopment/>
    )
}

