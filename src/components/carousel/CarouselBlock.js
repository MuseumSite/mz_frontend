import React from "react"
import {ButtonMain} from "../ButtonMain";

export const CarouselBlock = ({title, date, description}) => {

    return (
        <div className="carousel-block">
            <div className="carousel-block-wrapper">
                <p className="carousel-block-title">{title}</p>
                <p className="carousel-block-date">{date}</p>
                <p className="carousel-block-description">{description}</p>
                <ButtonMain
                    textBtn="Читать"
                    link="/news"
                    classNew="carousel-block-btn-more"
                />
            </div>
        </div>
    )
}