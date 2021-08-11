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
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';
import { flexbox } from '@material-ui/system';
import { useNavigate, Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginTop: 30,
      justifyContent: "center",
      alignItems: "center"

    },
  });

export default function Interests( { user, isFetching, interests, error }){
    const classes = useStyles();
    const [alignment, setAlignment] = useState('left');
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState({});

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    console.log("interests", interests)


    const handleOnSubmit = async () => {
        navigate("/");
    }

    return (
        <div>
            <h1 className="Header">What are your Interests?</h1>
            
                               <>
                               <div className="interests">
                                   
                        {interests.map((interests) => (
                            <InterestsCard interest={interests} user={user} key={interests.id} />
                        ))}
                        </div>
                    </>
                    <Button className={classes.root} onClick={handleOnSubmit}>Submit</Button>

        </div>
    )

}