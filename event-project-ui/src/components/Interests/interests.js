import React from 'react';
import { useState } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Sports from "../../Sports.jpg"
import Music from "../../Music.jpg"
import InterestsCard from './InterestsCard';
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
        },
        {
            id: 2,
            eventImage: Music,

        },
        {
            id: 3,
            eventImage: Food,
        },
        {
            id: 4,
            eventImage: Charity,

        },

    ];

    return (
        <div>
            <h1 className="Header">What are your Interests?</h1>
            
                               <>
                               
                               <div className="interests">
                                   
                        {interestsCategories.map((interests) => (
                            <InterestsCard event={interests} user={user} key={interests.id} />
                        ))}
                        </div>
                    </>

        </div>
    )

}