import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return <ul className="navbar">
        <li className="navbar-item">
            <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
            <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
            <Link to="/reviews">Reviews</Link>
        </li>
        {localStorage.getItem("honey_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                    className="navbar-link"
                    to=""
                    onClick={() => {
                        localStorage.removeItem("honey_user")
                        navigate("/", { replace: true })
                    }}
                >
                    Logout
                </Link>
            </li>
        ) : (
            ""
        )}
    </ul>

}





//li Link to About

//li Link to ReviewList

//check if local storage has login code

/*If it does, display logout option that removes
codename from local storage and link them to
log in*/

//If it does not display nothing