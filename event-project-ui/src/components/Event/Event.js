import React from 'react';
import { useState } from 'react';
// import { Link } from "react-router-dom"
import "./Event.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    paddingRight: {
        paddingRight: 5,
    },
});

//add this param: { event }
export default function Event( { event, user }) {
    const classes = useStyles();
    console.log("Event", event)
    return (
        <div className="individualEvent">
            {/* <h1> {event["Event Name"]} </h1> */}
                {/* <h1> {event.event_name}</h1>  */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={event["Event Name"]}
                            height="140"
                            title={event["Event Name"]}
                            image={event.event_image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {event["Event Name"]}
                            </Typography> 
                            {/* <Grid container>
                                <Grid item className={classes.paddingRight}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.date}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.beginningTime} - {event.endTime}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item className={classes.paddingRight}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.location}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.venue}
                                    </Typography>
                                </Grid> 
                            </Grid>  */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
        </div>

    )
}
