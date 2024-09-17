import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"

export function AppFooter() {
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()

    return (
        <footer className="app-footer">
            <NavLink to={'/'}>
                <div className="logo">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1706465164/White-Beige-removebg_rmm7si.png" alt="" />
                </div>
            </NavLink>
            {/* {<div className="links eng">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/view-doc'}>View Docrorate</NavLink>
            </div>}
            <NavLink to={'/'}>
                <div className="site-logo">
                    <img src="https://porphyrology.com/wp-content/uploads/2022/01/porphyrology-logo3_5.png" alt="" />
                </div>
            </NavLink> */}
        </footer>
    )
} 