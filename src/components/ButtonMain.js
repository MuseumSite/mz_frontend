import React from "react"
import {NavLink} from "react-router-dom"

export const ButtonMain = ({textBtn, link, classNew = ""}) => {
    let classParams = 'btn-wrapper ' + classNew

    return (
        <NavLink to={link} className={classParams}>
            <div  className="btn-text">
                {textBtn}
            </div>
            <div className="btn-right-arrow">
                <svg className="btn-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7514 5.61051L0.608843 0.467779C0.431419 0.387209 0.21971 0.435208 0.0962848 0.587776C-0.0279978 0.740343 -0.0322834 0.957195 0.0859993 1.11405L3.75019 5.99965L0.0859993 10.8852C-0.0322834 11.0421 -0.0279978 11.2598 0.0954277 11.4115C0.178568 11.5152 0.302851 11.5709 0.428848 11.5709C0.489703 11.5709 0.550559 11.5581 0.607986 11.5315L11.7506 6.38878C11.9031 6.31849 12 6.16678 12 5.99965C12 5.83251 11.9031 5.6808 11.7514 5.61051Z" fill="#E4E4E4"/>
                </svg>
            </div>
        </NavLink>

    )
}