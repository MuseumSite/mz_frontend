import React from "react"
import {NavLink} from "react-router-dom"

export const ButtonMain = ({textBtn}) => {

    return (
        <NavLink to="/about" id="btn-about">
            {textBtn}
        </NavLink>
    )
}