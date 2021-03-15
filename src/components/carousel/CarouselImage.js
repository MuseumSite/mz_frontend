import React from "react"
import {CarouselData} from "./CarouselData"
import {CarouselBlock} from "./CarouselBlock"

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'animate.css'

export const CarouselImage = ({slides}) => {

    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            responsive: {
                600: {
                    stagePadding: 0,
                },
                1000: {
                    stagePadding: 100,
                },
                1400: {
                    stagePadding: 200,
                },
                1800: {
                    stagePadding: 340,
                }
            },
            navText: [
                "<span aria-label='Previous' class='nav-prev'>" +
                "<svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "<circle cx=\"17\" cy=\"17\" r=\"16\" fill=\"white\"/>\n" +
                "<path d=\"M17 0C7.62563 0 0 7.62563 0 17C0 26.3744 7.62563 34 17 34C26.3744 34 34 26.3744 34 17C34 7.62563 26.3744 0 17 0ZM20.5416 11.3334C20.5416 11.5215 20.4669 11.7014 20.3341 11.8342L15.1683 17L20.3342 22.1659C20.467 22.2987 20.5417 22.4785 20.5417 22.6667V24.7917C20.5417 25.0781 20.3688 25.3368 20.1046 25.4461C19.8403 25.5526 19.5346 25.4945 19.3326 25.2925L11.5409 17.5008C11.2642 17.2241 11.2642 16.7759 11.5409 16.4992L19.3325 8.70759C19.4681 8.57199 19.6493 8.50007 19.8334 8.50007C19.9247 8.50007 20.0174 8.51806 20.1045 8.55405C20.3687 8.66336 20.5416 8.92208 20.5416 9.20842V11.3334Z\" fill=\"#363636\"/>\n" +
                "</svg>\n" +
                "</span>",
                "<span aria-label='Next' class='nav-next'>" +
                "<svg width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
                "<circle r=\"16\" transform=\"matrix(-1 0 0 1 17 17)\" fill=\"white\"/>\n" +
                "<path d=\"M17 0C26.3744 0 34 7.62563 34 17C34 26.3744 26.3744 34 17 34C7.62563 34 0 26.3744 0 17C0 7.62563 7.62563 0 17 0ZM13.4584 11.3334C13.4584 11.5215 13.5331 11.7014 13.6659 11.8342L18.8317 17L13.6658 22.1659C13.533 22.2987 13.4583 22.4785 13.4583 22.6667V24.7917C13.4583 25.0781 13.6312 25.3368 13.8954 25.4461C14.1597 25.5526 14.4654 25.4945 14.6674 25.2925L22.4591 17.5008C22.7358 17.2241 22.7358 16.7759 22.4591 16.4992L14.6675 8.70759C14.5319 8.57199 14.3507 8.50007 14.1666 8.50007C14.0753 8.50007 13.9826 8.51806 13.8955 8.55405C13.6313 8.66336 13.4584 8.92208 13.4584 9.20842V11.3334Z\" fill=\"#363636\"/>\n" +
                "</svg>\n" +
                "</span>"
            ]
        })
    });

    return (
        <section className=" main">
            <div className="owl-carousel owl-theme">
                {CarouselData.map((slide, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={slide.image} alt="slide image" className="image"/>
                            <CarouselBlock
                                title={slide.title}
                                date={slide.date}
                                description={slide.description}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}