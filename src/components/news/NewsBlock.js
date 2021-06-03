import React from "react"

function NewsBlock({img, title, description, date}) {

    return (
        <div className="news-block">
            <div className="news-block-image">
                <img src={img} alt="" className="news-image"/>
            </div>
            <div className="news-block-content">
                <p className="news-item-title">{title}</p>
                <p className="news-item-description">{description}</p>
                <div className="group-share-date">
                    <div className="news-item-date">{date}</div>
                    <svg className="news-share" width="17" height="17" viewBox="0 0 17 17" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.4805 11.0234C12.4963 11.0234 11.629 11.5076 11.0843 12.2438L6.37467 9.83224C6.45286 9.56572 6.50781 9.2895 6.50781 8.99805C6.50781 8.60273 6.42676 8.2269 6.28675 7.88123L11.2156 4.91526C11.7641 5.559 12.5703 5.97656 13.4805 5.97656C15.1283 5.97656 16.4688 4.63612 16.4688 2.98828C16.4688 1.34044 15.1283 0 13.4805 0C11.8326 0 10.4922 1.34044 10.4922 2.98828C10.4922 3.36803 10.5704 3.72825 10.7001 4.06267L5.75659 7.03734C5.20854 6.41272 4.41392 6.00977 3.51953 6.00977C1.87169 6.00977 0.53125 7.35021 0.53125 8.99805C0.53125 10.6459 1.87169 11.9863 3.51953 11.9863C4.51994 11.9863 5.40185 11.488 5.94452 10.7311L10.6386 13.1348C10.5522 13.4139 10.4922 13.7046 10.4922 14.0117C10.4922 15.6596 11.8326 17 13.4805 17C15.1283 17 16.4688 15.6596 16.4688 14.0117C16.4688 12.3639 15.1283 11.0234 13.4805 11.0234Z"
                            fill="#363636"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock