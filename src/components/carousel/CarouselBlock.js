import React from "react"

export const CarouselBlock = ({title, date, description}) => {

    return (
        <div className="carousel-block">
            <div className="carousel-block-wrapper">
                <p className="carousel-block-title">{title}</p>
                <p className="carousel-block-date">{date}</p>
                <p className="carousel-block-description">{description}</p>
            </div>
        </div>
    )
}