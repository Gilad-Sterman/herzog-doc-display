import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"

export function AppHeader() {
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()

    return (
        <header className="app-header">
            {<div className="links eng">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/view-org'}>View Original</NavLink>
                <NavLink to={'/search'}>
                    <img className="search-img" src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508377/icons/search_icsjot_ag7qif.svg" alt="" />
                </NavLink>
            </div>}
            <NavLink to={'/'}>
                <div className="site-logo">
                    <img src="https://porphyrology.com/wp-content/uploads/2022/01/porphyrology-logo3_5.png" alt="" />
                </div>
            </NavLink>
        </header>
    )
} 