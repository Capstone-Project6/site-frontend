import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import apiClient from "../../services/apiClient"
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import './App.css';

function App() {
  const [user, setUser] = useState({})
  const [events, setEvents] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
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
  
  return (
    <div className="App">
      <BrowserRouter>
        {/* ADDED PARAMS*/}
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home user={user} error={error} />}></Route>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}></Route>
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
