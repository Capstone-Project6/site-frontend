import {Link, Route} from 'react-router-dom'
import './Navbar.css'

//added parameter
export default function Navbar({ user, handleLogout}){
    return(
        <nav className="navbar">
            <div class="navContent">
                {/* site name/logo that is towards the left of the navbar */}
                <Link to="/">
                    <h1 className="siteLogo"> Site Name</h1>
                </Link>
                {/* the links to various pages */}
                <ul className="navLinks">
                    {user?.email? ( 
                        <>
                            <li>
                                <span>{user.email}</span>
                            </li>

                            <li className="makeEvent">
                                <Link to="/create">Create Event</Link>
                            </li>

                            <li>
                                <span onClick={handleLogout}> Logout</span>
                            </li>
                            
                        </>
                    ) : (
                        <>
                            <li className="logInLabel">
                                <Link to="/login">Log In</Link>
                            </li>
                            <li className="signUpLabel">
                                <Link to="/signup">Sign Up</Link>
                            </li>

                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}