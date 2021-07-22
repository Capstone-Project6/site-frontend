import React from 'react';
import { useState } from 'react';
// import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./InterestsCard.css"

const useStyles = makeStyles({
    root: {
        width: 325,
    },
});

//add this param: { event }
export default function InterestsCard( { event, user }) {
    const classes = useStyles();
    
    return (

        <div className="InterestsCard">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="325"
                            image={event.eventImage}
                        />
                    </CardActionArea>
                </Card>
        </div>

    )
}
