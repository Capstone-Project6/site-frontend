import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import apiClient from "../../services/apiClient"
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
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

export default function EventRegistration({user, individualEvent}){
    const userId = user.id
    // const { id } = useParams() OR individualEvent.id
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const[endingDate, setEndingDate] = useState(false)
    const[isLoading, setIsLoading] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const[error, setError] = useState(null)
    const[form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        tickets_number: "",
        event_id: id
    })
    // var ticketRows = [];
    // let x = 1;

    useEffect(() => {
        const fetchIndividualEvent = async () => {
            setIsFetching(true)
            const { data, error } = await apiClient.fetchPostById(id)
            if (data) {
                setEvent(data.event)
                // console.log("Individual event: ", data.event)
                // for(var i = 1; i< data.event["Tickets left"] + 1; i++){
                //     ticketRows.push(<MenuItem value={i}>{i}</MenuItem>);
                // }
        
            }
            if (error) {
                setError(error)
            }
            setIsFetching(false)
        }
        fetchIndividualEvent()
    }, [])

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

    // function createTicketRows() {
    //     for(var i = 0; i< event["Ticket number"]; i++){
    //         ticketRows.push(<MenuItem value={i}>{i}</MenuItem>);
    //     }
    //     console.log(ticketRows)
    // }

    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value}))
    }

    
    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '1320',
    });
    
    
    const handlePhoneNumberChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };
    
    useEffect(() => {    
        setForm(data => ({...data, phone_number: values.textmask}))
    }, [values.textmask])

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, form: null }))

        console.log("User's phone number: ", values.textmask)

        console.log("User id", userId)
        console.log("Input data", form)

        const { data, error } = await apiClient.eventRegistration({form, userId})
        if(data){
            console.log("You have successfully registered!")
            console.log("Registration data ", data.registration)
        }
        if(error) {
            setError((e) => ({ ...e, form: error }))
        }

        setIsProcessing(false)
    }

    const handleOnRecommendationSubmit = async () => {
        setIsProcessing(true)
        setError((e) => ({ ...e, form: null }))

        const { data, error } = await apiClient.addRecommendation({id, userId})
        if(data){
            console.log("You have successfully added a recommendation!")
        }
        if(error) {
            setError((e) => ({ ...e, form: error }))
        }

        setIsProcessing(false)
    }

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
             // image="https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            <>
                <div className="eventRegistrationContent">
                    <Box className={classes.eventRegistrationContent}>
                        <Grid container className={classes.eventInfo}>
                            <Grid item className={classes.eventPosterContainer}>
                                <Card className={classes.eventPosterCard}>
                                        <CardMedia
                                            component="img"
                                            alt="Stock party image"
                                            image={event["Event Image"]}
                                        />
                                        <CardContent>
                                            <Box className={classes.eventName}>
                                                <Typography variant="h5" component="h1">
                                                    {event["Event Name"]}
                                                </Typography>
                                            </Box>
                                            <Box className={classes.dateAndTimeSection}>
                                                <Box className={classes.dateAndTimeLabel} fontWeight="fontWeightBold" fontSize={16}>
                                                        Date and Time
                                                </Box>
                                                <Box className={classes.dateAndTimeInfo}>
                                                    {/* checks whether or not the event spans a single day or multiple days */}
                                                    {(event["Ending Date"] !== null)? (
                                                        <Typography component="p">
                                                            {event["Beginning Date"]} - {event["Ending Date"]}
                                                        </Typography>
                                                    ) : (
                                                        <Typography component="p">
                                                            {event["Beginning Date"]}
                                                        </Typography>
                                                    )}
                                                    <Typography component="p">
                                                        {event["Beginning Time"]} - {event["Ending Time"]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className={classes.locationSection} mt={2}>
                                                <Box className={classes.locationLabel} fontWeight="fontWeightBold" fontSize={16}>
                                                    Location
                                                </Box>
                                                <Box className={classes.locationInfo}>
                                                    <Typography component="p">
                                                        {event.Venue}
                                                    </Typography>
                                                    <Typography component="p">
                                                        {event.City}, {event.State}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Button color="primary" variant="contained" size="large" onClick={handleOnRecommendationSubmit} > Add Recommendedation</Button>
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
                                            {event.Description}
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
                                                <TextField 
                                                    id="outlined-basic" 
                                                    variant="outlined" 
                                                    label="First Name" 
                                                    name="first_name"
                                                    value={form.first_name}
                                                    onChange={handleOnInputChange}
                                                    fullWidth 
                                                />
                                            </Box>
                                        </Box>
                                        <Box className={classes.inputField}>
                                            <Typography>
                                                Last Name
                                            </Typography>
                                            <Box className={classes.textBox} mt={1}>
                                                <TextField 
                                                    id="outlined-basic" 
                                                    variant="outlined" 
                                                    label="Last Name" 
                                                    name="last_name"
                                                    value={form.last_name}
                                                    onChange={handleOnInputChange}
                                                    fullWidth 
                                                />
                                            </Box>
                                        </Box>
                                        <Box className={classes.inputField}>
                                            <Typography>
                                                Email
                                            </Typography>
                                            <Box className={classes.textBox} mt={1}>
                                                <TextField 
                                                    id="outlined-basic" 
                                                    variant="outlined" 
                                                    label="Email" 
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleOnInputChange}
                                                    fullWidth 
                                                />
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
                                                    onChange={handlePhoneNumberChange}
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
                                                        value={form.tickets_number}
                                                        name="tickets_number"
                                                        onChange={handleOnInputChange}
                                                        label="Tickets"
                                                        >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={1}>One</MenuItem>
                                                        <MenuItem value={2}>Two</MenuItem>
                                                        <MenuItem value={3}>Three</MenuItem>
                                                        {/* {ticketRows.map((x) => (
                                                            <MenuItem value={x}>{x}</MenuItem>
                                                        ))} */}
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                                <CardActions className={classes.formButtonContainer}>
                                    <Button color="primary" variant="contained" size="large" onClick={handleOnSubmit} > Register</Button>
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