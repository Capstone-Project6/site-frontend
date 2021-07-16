import React from 'react';
// import { Link } from "react-router-dom"
import "./Event.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

//add this param: { event }
export default function Event( { event }) {
    const classes = useStyles();

    return (
        // pseudocode: 
        //   - Each event is a card
            // <div class="card">
            //     <img className="eventImage" src=# />
            //     <div className="eventCardInfo">
            //         <h2 className="eventName"> Event Name</h2>
            //         <div className="eventCardDetails"> 
            //             <p> Date </p>
            //             <p> Time </p>
            //             <p> State, City <p/>
            //             <p> Venue </p>
            //         </div>
            //     </div>
            // </div>

        <div className="individualEvent">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={event.eventImage}
                            title={event.eventName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {event.eventName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {event.eventDescription}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
        </div>

    )
}
