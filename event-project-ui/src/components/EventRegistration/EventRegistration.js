import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './EventRegistration.css'
import { Typography } from '@material-ui/core';

export default function EventRegistration({user}){
    // const { id } = useParams()
    const { id } = 10
    const [event, setEvent] = useState({})
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState(null)

    // useEffect(() => {
    //     const getProductById = async () => {
    //         setIsLoading(true)

    //         try{
    //             const res = await axios.get(`http://localhost:3001/products/${id}`)
    //             console.log({res})
    //             if(res?.data?.product){
    //                 setProduct(res.data.product)
    //             } else {
    //                 setError("Product not found.")
    //             }
    //         } catch(err){
    //             console.log({err})
    //             setError("Product not found.")
    //         }
    //         setIsLoading(false)
    //     }
    //     getProductById()
    // }, [id])

    const useStyles = makeStyles({
        eventRegistrationContent : {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }
    });
    
    const classes = useStyles();

    const renderEventContent = () => {
        if(isLoading){
            return <h1>Loading...</h1>
        }
        if(error){
            return(
                <>
                    <h1> Error</h1>
                    <p className="error"> {String(error)}</p>
                </>
            )
        }

        return (
            <div className="eventRegistration">
                <h1> RegistrationPage</h1>
                <Box className={classes.eventRegistrationContent}>
                    <Grid container className={classes.eventInfo}>
                        <Grid item>
                            <Typography> 
                                Event Poster
                            </Typography>
                            <Typography>
                                Event Details
                            </Typography>
                            <Typography>
                                Event description
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.registrationForm}>
                        <Grid item>
                            <Typography> Registration Form</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }

    return (
        <div className="eventRegistrationPage">
            {renderEventContent}
        </div>
    )
}