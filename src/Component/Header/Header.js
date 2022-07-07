import React from 'react'
import "./Header.css"

function Header({ title }) {
    return (
        <div className="header-component d-flex align-items-center justify-content-center">
            <h2>{title}</h2>
        </div>
    )
}

export default Header