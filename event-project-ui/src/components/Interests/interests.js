import React from 'react';
import { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Sports from "../../Sports.jpg"
import Music from "../../Music.jpg"
import Event from '../Event/Event'
import Charity from '../../Charity.jpg'
import Food from '../../Food.jpg'
import "./Interests.css"

export default function Interests( { user, isFetching, events, error }){
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const interestsCategories = [
        { 
            id: 1,
            eventImage: Sports,
            eventName: "Sports",
            eventDescription: "Find tickets for your favorite sporting events!",
        },
        {
            id: 2,
            eventImage: Music,
            eventName: "Music",
            eventDescription: "Attend concerts, music festivals, karaoke nights, and more!",
        },
        {
            id: 3,
            eventImage: Food,
            eventName: "Food",
            eventDescription: "Learn about different food events in your area!",
        },
        {
            id: 4,
            eventImage: Charity,
            eventName: "Charity",
            eventDescription: "Find events that allow you to give back to the community!",
        },

    ];

    return (
        <div>
            <h1 className="Header">What are your Interests?</h1>
                               <>
                               <div className="interests">
                        {interestsCategories.map((interests) => (
                            <Event event={interests} user={user} key={interests.id} />
                        ))}
                        </div>
                    </>

        </div>
    )

}