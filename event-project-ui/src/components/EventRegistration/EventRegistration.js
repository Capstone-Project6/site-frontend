import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import { spacing, typography } from '@material-ui/system';
import './EventRegistration.css'
import { CardContent, Typography } from '@material-ui/core';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

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
            margin: 40
        },
        eventPosterContainer: {
            margin: "auto",

        },
        eventName: {
            display: "flex",
            justifyContent: "center"
        },
        aboutContainer: {
            background: "#C4C4C4",
            borderRadius: 10,
        },
        aboutBox: {
            height: "100%"
        },
        dateAndTimeSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        locationSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        form: {
            width:"100%"
        },
        formTitle: {
            display:"flex",
            justifyContent: "center",
            height: "10%",
            alignItems: "center"
        },
        formFields: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "90%"
        },
        cardContent: {
            height: "85%"
        },
        formControl: {
            width: 150
        },
        inputRow: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        formButtonContainer: {
            display: "flex",
            justifyContent: "center"
        }
    });
    
    const classes = useStyles();
    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    
    const [ticketRequest, setTicketRequest] = useState('');

    const handleTicketChange = (event) => {
        setTicketRequest(event.target.value);
    };

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
                    <Box className={classes.eventRegistrationContent}>
                        <Grid container className={classes.eventInfo}>
                            <Grid item className={classes.eventPosterContainer}>
                                <Card className={classes.eventPosterCard}>
                                        <CardMedia
                                            component="img"
                                            alt="Stock party image"
                                            image="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                        />
                                        <CardContent>
                                            <Box className={classes.eventName}>
                                                <Typography variant="h5" component="h1">
                                                    Color Run
                                                </Typography>
                                            </Box>
                                            <Box className={classes.dateAndTimeSection}>
                                                <Box className={classes.dateAndTimeLabel} fontWeight="fontWeightBold" fontSize={16}>
                                                        Date and Time
                                                </Box>
                                                <Box className={classes.dateAndTimeInfo}>
                                                    <Typography component="p">
                                                        August 21, 2021
                                                    </Typography>
                                                    <Typography component="p">
                                                        8:00pm - 1:00am
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className={classes.locationSection} mt={2}>
                                                <Box className={classes.locationLabel} fontWeight="fontWeightBold" fontSize={16}>
                                                    Location
                                                </Box>
                                                <Box className={classes.locationInfo}>
                                                    <Typography component="p">
                                                        Piedmont Park
                                                    </Typography>
                                                    <Typography component="p">
                                                        Atlanta, GA
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                </Card>
                            </Grid>
                            <Box className={classes.aboutContainer} mt={5}>
                                <Box className={classes.aboutBox} m={2}>
                                   <Box className={classes.aboutBoxTitle}>
                                       <Typography  variant="h6" component="h2">
                                           About
                                       </Typography>
                                   </Box>
                                   <Box className={classes.aboutBoxContent}>
                                       <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                       </Typography>
                                   </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid container className={classes.registrationForm}>
                            <Card className={classes.form}>
                                <CardContent className={classes.cardContent}>
                                    <Box className={classes.formTitle}>
                                        <Typography variant="h5">
                                            Event Registration
                                        </Typography>
                                    </Box>
                                    <Box className={classes.formFields} ml={5} mr={5}>
                                        <Box className={classes.inputField}>
                                            <Typography>
                                                First Name
                                            </Typography>
                                            <Box className={classes.textBox} mt={1}>
                                                <TextField id="outlined-basic" variant="outlined" label="First Name" fullWidth />
                                            </Box>
                                        </Box>
                                        <Box className={classes.inputField}>
                                            <Typography>
                                                Last Name
                                            </Typography>
                                            <Box className={classes.textBox} mt={1}>
                                                <TextField id="outlined-basic" variant="outlined" label="Last Name" fullWidth />
                                            </Box>
                                        </Box>
                                        <Box className={classes.inputField}>
                                            <Typography>
                                                Email
                                            </Typography>
                                            <Box className={classes.textBox} mt={1}>
                                                <TextField id="outlined-basic" variant="outlined" label="Email" fullWidth />
                                            </Box>
                                        </Box>
                                        <Box className={classes.inputRow}>
                                            <Box mr={2}>
                                                <Typography>
                                                    Phone Number
                                                </Typography>
                                                <Box className={classes.textBox} mt={1}>
                                                <FormControl>
                                                    {/* <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel> */}
                                                    <Input
                                                    value={values.textmask}
                                                    onChange={handleChange}
                                                    name="textmask"
                                                    id="formatted-text-mask-input"
                                                    inputComponent={TextMaskCustom}
                                                    />
                                                </FormControl>
                                                </Box>
                                            </Box>
                                            <Box ml={2}>
                                                <Typography>
                                                    Number of Tickets
                                                </Typography>
                                                <Box className={classes.textBox} mt={1}>
                                                <FormControl variant="outlined" className={classes.formControl}>
                                                        <InputLabel id="demo-simple-select-outlined-label">Ticket Number</InputLabel>
                                                        <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        value={ticketRequest}
                                                        onChange={handleTicketChange}
                                                        label="Age"
                                                        >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>One</MenuItem>
                                                        <MenuItem value={2}>Two</MenuItem>
                                                        <MenuItem value={3}>Three</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                                <CardActions className={classes.formButtonContainer}>
                                    <Button color="primary" variant="contained" size="large" > Register</Button>
                                </CardActions>
                            </Card>
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