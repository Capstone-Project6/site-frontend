import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar">
            <div class="navContent">
                {/* site name/logo that is towards the left of the navbar */}
                <Link to="/">
                    <h1 className="siteLogo"> Site Name</h1>
                </Link>
                {/* the links to various pages */}
                <ul className="navLinks">
                    <li className="logInLabel">
                        <Link to="/login">Log In</Link>
                    </li>
                    <li className="signUpLabel">
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}