import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import profileIcon from "../../profileIcon.png"
import SearchBar from "material-ui-search-bar";
import './Navbar.css'

//added parameter
export default function Navbar({ user, handleLogout }){
    const [searchValue, setSearchValue] = React.useState("")
    const location = useLocation()
    const showSearch = location.pathname !== "/signup" && location.pathname !== "/login"
    console.log(location)

    return(
        <nav className="navbar">
            <div class="navContent">
                {/* site name/logo that is towards the left of the navbar */}
                <Link to="/">
                    <h1 className="siteLogo"> Site Name</h1>
                </Link>
                {/* <form id="search-form" autocomplete="off">
         <input id="search-input" type="text" size="50" placeholder="Enter a category, event name, organizer name, etc." name="event-search"/>
         <button class="search-button">Search Events</button>
        </form> */}
        {showSearch &&
          <SearchBar
          value={searchValue}
          onChange={(newValue) => {setSearchValue(newValue)}}
          onRequestSearch={() => {
              console.log("enter")
          }}
  />
        }
                {/* the links to various pages */}
                <ul className="navLinks">
                    {user?.email? ( 
                        <>
                            {/* <li>
                                <span>{user.email}</span>
                            </li> */}
                            <li>
                                <Link className="profileButton" to="/eventgoerProfile"> 
                                    <span className="profileButtonItem"> {user.email} <img className="profileIcon" src={profileIcon} alt="profile icon"/> </span>
                                </Link>
                            </li>

                            <li className="logout">
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