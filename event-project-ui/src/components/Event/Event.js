import React from 'react';
// import { useState } from 'react';
// import { Link } from "react-router-dom"
import "./Event.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { flexbox } from '@material-ui/system';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    paddingRight: {
        paddingRight: 30,
    },
});

//add this param: { event }
export default function Event( { event, user }) {
    console.log("PRICE", event)
    const classes = useStyles();
    // console.log("Event", event)
    return (
        <div className="individualEvent">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={event["Event Name"]}
                            height="140"
                            title={event["Event Name"]}
                            image={event["Event Image"]}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {event["Event Name"]}
                            </Typography> 
                            <Grid container>
                                <Grid item className={classes.paddingRight}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event["Beginning Date"]}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event["Beginning Time"]} - {event["Ending Time"]}
                                    </Typography>
                                </Grid>
                            </Grid>
                            {/* <Grid container>
                                <Grid item className={classes.paddingRight}>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.City}, {event.State}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {event.Venue}
                                    </Typography>
                                </Grid> 
                            </Grid>  */}
                            <Typography variant="body2" color="textSecondary" component="p">
                                {event.City}, {event.State}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                ${event.Price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {event.Venue}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    </CardActions>
                </Card>
        </div>

    )
}
