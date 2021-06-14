import React, {useEffect} from "react"
import Footer from "../components/Footer";

function init() {
    let myMap, Balloon
    myMap = new ymaps.Map('map_contact', {
        center: [55.069932, 82.909030],
        zoom: 17,
        controls: ['smallMapDefaultSet']
    }, {
        searchControlProvider: 'yandex#search'
    })
    Balloon = new ymaps.Placemark([55.069932, 82.909030], {
        balloonContentHeader: "Музей \"Заельцовка\"",
        balloonContentBody: [
            '<address>',
            'Красный проспект, 179',
            '<br/>',
            '1 этаж (ост. «Северная») ',
            '<br/>',
            '</address>'
        ].join(''),
        balloonContentFooter: [
            '<strong>Пн - Вт с выходной<strong/><br/>'+
            '<strong>Ср, Пт, Сб с 10:00 до 19:00<strong/><br/>'+
            '<strong>Чт с 11:00 до 20:00<strong/><br/>'+
            '<strong>Вс с 10:00 до 18:00<strong/>'
        ]
    }, {
        preset: 'islands#redDotIcon'
    })
    myMap.geoObjects.add(Balloon)
}

function ContactPage() {
    useEffect(() => {
        ymaps.ready(init)
    }, [])

    return (
        <div>
            <section className="main container-second">
                <div className="news-block-title">Контакты</div>
                <div className="contact-wrapper">
                    <div className="contact-content">
                        <h1>Руководитель Музея «Заельцовка»</h1>
                        <p>Елена Валериевна Макарова</p>
                    </div>
                    <div className="contact-tel">
                        <div className="contact-content">
                            <h1>Телефон/факс</h1>
                            <a href="tel: +7(383) 2-000-271">(383) 2-000-271</a>
                        </div>
                        <div className="contact-content">
                            <h1>Телефон</h1>
                            <p>2-000-371</p>
                        </div>
                    </div>
                    <div className="contact-content">
                        <h1>Адрес</h1>
                        <p>Красный проспект, 179</p>
                        <p>1 этаж (ост. «Северная»)</p>
                    </div>
                    <div id="map_contact"></div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ContactPage