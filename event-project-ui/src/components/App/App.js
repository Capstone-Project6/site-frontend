import { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import axios from 'axios';
import apiClient from "../../services/apiClient"
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../SignUp/SignUp';
import Create from '../createEvent/createEvent'
import Interests from '../Interests/Interests';
import EventgoerProfile from '../EventgoerProfile/EventgoerProfile';
import Filter from '../Filter/Filter';
import './App.css';
import EventRegistration from '../EventRegistration/EventRegistration';
// import { useNavigate} from "react-router-dom";


function App() {
  //This const holds the user information
  const [user, setUser] = useState({})
  //This const will hold an event
  const [events, setEvents] = useState([])
  //This const handles errors
  const [error, setError] = useState(null)
  //This const determines if events are being fetched
  const [isFetching, setIsFetching] = useState(false)

  const [filteredEvents, setFilteredEvents] = useState([])

  const [interests, setInterests] = useState([])
  
  const [registeredEvents, setRegisteredEvents] = useState([])
  const [attendedEvents, setAttendedEvents] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [reviews, setReviews] = useState([])
  // const [userHasRegisteredEvents, setUserHasRegisteredEvents] = useState(false)
  // const [userHasAttendedEvents, setUserHasAttendedEvents] = useState(false)
  // const [userHasRecommendations, setUserHasRecommendations] = useState(false)
  // const [userHasReviews, setUserHasReviews] = useState(false)

  useEffect(() => {
    //The user is being fetched using the api token and the apiClient file
    const fetchUser = async () => {
      //fetchUserFromToken() returns the user (by using auth/me)
      const { data, error } = await apiClient.fetchUserFromToken()
      if (data) {
        console.log(data.user)
        setUser(data.user)
      }
      if (error){
        setError(error)
      }
    }

    const token = localStorage.getItem("event_finder_token")
      if (token) {
        apiClient.setToken(token)
        fetchUser()
      }
  }, [])

  useEffect(() => {
    const fetchInterests = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.getCategories()
      // console.log("category data", data)
      if (data) {
        setInterests(data.categories)
      }
      if (error) {
        setError(error)
      }

      setIsFetching(false)
    }

    fetchInterests()
  }, [])

  useEffect(() => {
        const fetchRegisteredEvents = async () => {
            setIsFetching(true)
            const { data} = await apiClient.registeredEvents(user.id)
            if (data) {
                setRegisteredEvents(data.registeredEvents)
            }
            setIsFetching(false)
        }
        fetchRegisteredEvents()
    }, [user])

  useEffect(() => {
    const fetchEvents = async () => {
      setIsFetching(true)

      const { data, error } = await apiClient.listEvents()
      // console.log("data", data)
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



  // const updatePost = ({ postId, postUpdate }) => {
  //   setPosts((oldPosts) => {
  //     return oldPosts.map((post) => {
  //       if (post.id === Number(postId)) {
  //         return { ...post, ...postUpdate }
  //       }

  //       return post
  //     })
  //   })
  // }

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }

// console.log(filteredEvents)  
//  console.log(events)

 return (
   <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} handleLogout={handleLogout} setFilteredEvents={setFilteredEvents}/>
        <Routes>
          <Route path="/" element={<Home user={user} error={error} setError={setError} events={events} isFetching={isFetching} />}></Route>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}></Route>
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/interests" element={<Interests user={user} interests={interests} setUser={setUser} />}></Route>
          <Route path="/filter" element={<Filter user={user} setUser={setUser} filteredEvents={filteredEvents}/>}></Route>
          {/* updatePost={updatePost} */}
          <Route path="/eventgoerProfile" element={<EventgoerProfile user={user} setUser={setUser} registeredEvents={registeredEvents} attendedEvents={attendedEvents} recommendations={recommendations} reviews={reviews}/>}></Route>
          {/* "/eventRegistration/:id" */}
          <Route path="/eventRegistration" element={<EventRegistration user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;