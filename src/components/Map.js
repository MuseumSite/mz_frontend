import React, {useEffect} from 'react';

function init() {
    let myMap,
        sight1,
        sight2,
        sight3,
        sight4,
        sight5,
        sight6,
        sight7,
        sight8,
        sight9

    myMap = new ymaps.Map('map', {
        center: [55.063086, 82.909030],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    }, {
        searchControlProvider: 'yandex#search'
    })

    sight1 = new ymaps.Placemark([55.059253, 82.899383], {
        hintContent: 'Тимирязевский Сквер',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Тимирязевский Сквер<h1/><img src="http://78.40.219.36:5000/static/mark/sight1.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight2 = new ymaps.Placemark([55.063086, 82.909030], {
        hintContent: 'Музей Солнца',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Музей Солнца<h1/><img src="http://78.40.219.36:5000/static/mark/sight2.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight3 = new ymaps.Placemark([55.061286, 82.881300], {
        hintContent: 'Дендрологический Парк',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Дендрологический Парк<h1/><img src="http://78.40.219.36:5000/static/mark/sight3.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight4 = new ymaps.Placemark([55.066837, 82.909722], {
        hintContent: 'Фонтан',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Фонтан<h1/><img src="http://78.40.219.36:5000/static/mark/sight4.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight5 = new ymaps.Placemark([55.070962, 82.909417], {
        hintContent: 'Монумент "Ветеранам боевых действий"',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Монумент "Ветеранам боевых действий"<h1/><img src="http://78.40.219.36:5000/static/mark/sight5.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight6 = new ymaps.Placemark([55.066746, 82.932153], {
        hintContent: 'Сквер "40 Лет ПОБЕДЫ"',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Сквер "40 Лет ПОБЕДЫ"<h1/><img src="http://78.40.219.36:5000/static/mark/sight6.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight7 = new ymaps.Placemark([55.064499, 82.910261], {
        hintContent: 'Прогресс',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Прогресс<h1/><img src="http://78.40.219.36:5000/static/mark/sight7.jpg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight8 = new ymaps.Placemark([55.056651, 82.888998], {
        hintContent: 'Новосибирский зоопарк имени Р.А. Шило',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Новосибирский зоопарк имени Р.А. Шило<h1/><img src="http://78.40.219.36:5000/static/mark/sight8.jpeg" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    sight9 = new ymaps.Placemark([55.057714, 82.901386], {
        hintContent: 'Фонтан "Кот-путешественник"',
        balloonContent: '<div class="wrapper-sight"><h1 class="sight-title">Фонтан "Кот-путешественник"<h1/><img src="http://78.40.219.36:5000/static/mark/sight9.png" class="sight-img" alt=""/></div>'
    }, {
        preset: 'islands#darkGreenDotIcon',
        iconImageSize: [35, 40],
        iconImageOffset: [-5, -38]
    })

    myMap.geoObjects
        .add(sight1)
        .add(sight2)
        .add(sight3)
        .add(sight4)
        .add(sight5)
        .add(sight6)
        .add(sight7)
        .add(sight8)
        .add(sight9)
}

function Map() {
    useEffect(() => {
        ymaps.ready(init)
    }, [])

    return (
        <section className="map-block-wrapper">
            <div className="container-second">
                <div className="map-block-title">Интерактивная карта Заельцовского района</div>
                <div id="map"/>
            </div>
        </section>
    );
}

export default Map;