import React from "react"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const PageInDevelopment = () => {
    return (
        <div>
            <Header/>
            <section className="development-text-wrapper">
                <div className="main development-text">
                    <h1>Страница находится в разработке</h1>
                </div>
                <Footer/>
            </section>

        </div>
    )
}