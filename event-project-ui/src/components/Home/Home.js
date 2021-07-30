import React from 'react';
import { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import { Link } from "react-router-dom"
import Event from '../Event/Event'
import './Home.css'

//the Home function takes in an object that is an array of events
export default function Home( { user, isFetching, events, error }){
    // const[userLoggedIn, setUserLoggedIn] = useState(false);
    const [topEventsBtnClicked, setTopEventsBtnClicked] = useState(true);
    const[recommendedBtnClicked, setRecommendedBtnClicked] = useState(false);
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


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
                
                {user?.email? (
                     topEventsBtnClicked ? (
                            // topEventsData.map((event) => (
                            //     <Event event={event} user={user} key={event.id} />
                            // ))
                            events.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))
                        ) : (
                            //instead this will be a user's RECOMMENDED events
                            events.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))
                        )
                ) : (
                    <>
                        {events.map((event) => (
                            <Event event={event} user={user} key={event.id} />
                        ))}
                    </>
                )}

            </div>
        </div>
    )
}