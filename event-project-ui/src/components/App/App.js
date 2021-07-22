import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import apiClient from "../../services/apiClient"
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import EventgoerProfile from '../EventgoerProfile/EventgoerProfile';
import './App.css';

function App() {
  //This const holds the user information
  const [user, setUser] = useState({})
  //This const will hold an event
  const [events, setEvents] = useState([])
  //This const handles errors
  const [error, setError] = useState(null)
  //This const determines if events are being fetched
  const [isFetching, setIsFetching] = useState(false)


  useEffect(() => {
    const fetchEvents = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.listEvents()
      console.log("data", data)
      if (data) {
        setEvents(data.feed)
      }
      if (error) {
        setError(error)
      }

      setIsFetching(false)
    }

    fetchEvents()
  }, [])

  useEffect(() => {
    //The user is being fetched using the api token and the apiClient file
    const fetchUser = async () => {
      //fetchUserFromToken() returns the user (by using auth/me)
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

    const token = localStorage.getItem("event_finder_token")
      if (token) {
        apiClient.setToken(token)
        fetchUser()
      }
  }, [])

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }
  
 console.log(events)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home user={user} error={error} events={events} isFetching={isFetching} />}></Route>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}></Route>
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />}></Route>
          {/* what should the person's link to the page be called? Some websites use their username as the link */}
          <Route path="/eventgoerProfile" element={<EventgoerProfile user={user}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
