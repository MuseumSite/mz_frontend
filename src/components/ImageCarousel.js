import React, {useState, useEffect} from "react"
import {CarouselData} from "./CarouselData"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/all"
import {CarouselBlock} from "./CarouselBlock"

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'

// let owl_carousel = require('owl.carousel')
// window.fn = owl_carousel; На всякий случай

export const ImageCarousel = ({slides}) => {
    $(document).ready(function(){
        // $(".owl-carousel").owlCarousel();
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots: false,
            autoWidth: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
    });

    // const [current, setCurrent] = useState(1)
    const length = slides.length
    // let $elem
    // useEffect(
    //     () => {
    //         $elem = $('.slide.active')
    //
    //     },
    //     [current])
    //
    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }
    //
    // const prevSlide = () => {
    //     console.log($elem)
    //     console.log($elem.prev())
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    //     if ($('.slide.active:nth-child(1)')) {
    //         $('.slider:last-child').append($elem);
    //     } else {
    //         $elem.insertBefore($elem.prev())
    //     }
    // }



    return (
        <section className=" main">
            {/*<div onClick={prevSlide}>*/}
            {/*    <FaArrowAltCircleLeft className="left-arrow"/>*/}
            {/*</div>*/}
            {/*<div onClick={nextSlide}>*/}
            {/*    <FaArrowAltCircleRight className="right-arrow"/>*/}
            {/*</div>*/}

            <div className="owl-carousel owl-theme">
                {CarouselData.map((slide, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={slide.image} alt="slide image" className="image"/>
                            <CarouselBlock text={index}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}