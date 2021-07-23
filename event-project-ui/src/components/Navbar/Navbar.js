import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'
import SearchBar from "material-ui-search-bar";
import React from 'react'
import { useNavigate} from "react-router-dom";
import Event from "../Event/Event"
import { useState, useEffect } from 'react';
import apiClient from "../../services/apiClient"

//added parameter
export default function Navbar({ user, handleLogout, setFilteredEvents }){
    const [searchTerm, setSearchTerm] = useState("")
  //This const will hold an event
  const [events, setEvents] = useState([])
  //This const handles errors
  const [error, setError] = useState(null)
  //This const determines if events are being fetched
  const [isFetching, setIsFetching] = useState(false)
    const navigate = useNavigate();
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
          <SearchBar id="searchBar"
          placeholder="Search Events"
          value={searchTerm}
          onChange={(newValue) => {setSearchTerm(newValue)}}
           onRequestSearch= {async () => {          
            navigate("/filter")
            setFilteredEvents(await apiClient.searchEvents(searchTerm))
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
                            {/* <li>
                                <Link to="/eventgoerProfile"> 
                                    <span> {user.first_name}</span>
                                    <span> </span>
                                </Link>
                            </li> */}

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