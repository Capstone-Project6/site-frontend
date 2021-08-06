import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { spacing } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import './EventRegistration.css'
import { CardContent, Typography } from '@material-ui/core';

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
            justifyContent: "space-around",
            margin: "auto"
        },
        eventInfo: {
            margin: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        },
        registrationForm: {
            background: "#C4C4C4",
            margin: 40
        },
        eventPosterContainer: {
            margin: "auto",

        },
        aboutContainer: {
            background: "#F0F8FF",
            borderRadius: 10,
            height: 100
        },
        aboutBox: {
            height: "100%"
        }
    });
    
    const classes = useStyles();

    const renderEventContent = () => {
        // if(isLoading){
        //     return <h1>Loading...</h1>
        // }
        // if(error){
        //     return(
        //         <>
        //             <h1> Error</h1>
        //             <p className="error"> {String(error)}</p>
        //         </>
        //     )
        // }

        return (
            <>
                <div className="eventRegistrationContent">
                    <h1 className="eventRegistrationTitle"> Event Name</h1>
                    <Box className={classes.eventRegistrationContent}>
                        <Grid container className={classes.eventInfo}>
                            <Grid item className={classes.eventPosterContainer}>
                                <Card className={classes.eventPosterCard}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Stock party image"
                                            image="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                        />
                                        <CardContent>
                                            <Typography>
                                                Details
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item className={classes.aboutContainer}>
                                <Box className={classes.aboutBox}>
                                    <Typography>
                                        About
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.registrationForm}>
                            <Grid item>
                                <Typography> Registration Form</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </>
        )
    }

    return (
        <div className="eventRegistrationPage">
            <div className="eventRegistrationContent">
                {renderEventContent()}
            </div>
        </div>
    )
}