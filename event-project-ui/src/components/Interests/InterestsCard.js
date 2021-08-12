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
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { blue } from '@material-ui/core/colors';
import apiClient from "../../services/apiClient"
import Interests from './Interests';

const useStyles = makeStyles({
    root: {
        width: 275,
    },
});

//add this param: { event }
export default function InterestsCard( { interest, user }) {
    const classes = useStyles();
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
      setFormats(newFormats);
    };

    const favorites = {
        "categories_id": interest.category_id,
        "categories_name": interest.category_name
    }
    

    const handleOnClick = async () => {
        await apiClient.addFavorite(favorites, user.id)
    }
    
    return (

        <div className="InterestsCard">
            <ToggleButtonGroup className={classes.root} value={formats} onChange={handleFormat} aria-label="text formatting">
                <ToggleButton value="clicked" onClick={handleOnClick}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="275"
                            image={interest.category_image}
                            name={interest.category_name}
                        />
                                            <Typography variant="h5" component="h5">
            {interest.category_name}
          </Typography>
                    </CardActionArea>
                </Card>
                </ToggleButton>
                </ToggleButtonGroup>
        </div>

    )
}
