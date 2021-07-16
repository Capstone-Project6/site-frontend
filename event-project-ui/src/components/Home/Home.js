import React from 'react';
import { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import { Link } from "react-router-dom"
import partyPhoto from "../../partyPhoto.jpg"
import concertPhoto from "../../concertPhoto.jpg"
import Event from '../Event/Event'
import './Home.css'

//the Home function takes in an object that is an array of events
export default function Home( { user, isFetching, events, error }){
    const[userLoggedIn, setUserLoggedIn] = useState(false);
    const [topEventsBtnClicked, setTopEventsBtnClicked] = useState(true);
    const[recommendedBtnClicked, setRecommendedBtnClicked] = useState(false);
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    // if( user?.email? ) {
    //     setUserLoggedIn(true);
    // }

    const topEventsData = [
        { 
            id: 1,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 2,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 3,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 4,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 5,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 6,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 7,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 8,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
    ];

    const recommendedEventsData = [
        { 
            id: 1,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 2,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 3,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 4,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 5,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 6,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 7,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 8,
            eventImage: concertPhoto,
            eventName: "Fun Event",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
    ];

    return(
        <div className="home">
            {user?.email? (
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton onClick={() => {setTopEventsBtnClicked(true); setRecommendedBtnClicked(false); }} value="left" aria-label="left aligned">
                    Top Events
                </ToggleButton>
                <ToggleButton onClick={() => {setRecommendedBtnClicked(true); setTopEventsBtnClicked(false);}} value="right" aria-label="right aligned">
                    Recommended Events
                </ToggleButton>
            </ToggleButtonGroup>
            ): null}

            {/* CHANGE CODE HERE */}
            {/* It is probably better to combine this if else statement with the one in the feed div! */}
            { topEventsBtnClicked ? (
                <h1 className="homePageTitle">Top Events</h1>
            ) : (
                <h1 className="homePageTitle">Recommended Events</h1>
            )}
            <div className = "feed"> 
                {/* {error ? <h2 className="error">{error}</h2> : null}
                {isFetching ? <h2>Loading...</h2> : null}
                {events?.map((event) => (
                    <Event event={event} key={event.id} />
                ))} */}
                
                {user?.email? (
                     topEventsBtnClicked ? (
                            topEventsData.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))
                        ) : (
                            //instead this will be a user's RECOMMENDED events
                            recommendedEventsData.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))
                        )
                ) : (
                    <>
                        {topEventsData.map((event) => (
                            <Event event={event} user={user} key={event.id} />
                        ))}
                    </>
                )}

                {/* {topEventsData.map((event) => (
                    <Event event={event} user={user} key={event.id} />
                ))} */}
            </div>
        </div>
    )
}