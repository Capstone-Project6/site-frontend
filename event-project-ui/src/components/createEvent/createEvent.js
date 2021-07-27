import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { positions } from '@material-ui/system';
import "./createEvent.css"

//Add City and State

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// This is for the category dropdown
const useStyles = makeStyles((theme) => ({
    /* For the Dropdown menu */
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      top: 200,
      right: 500,
      
    },
    /* For the Dropdown menu */
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    /* For the text box */
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '600px',
        marginLeft:'220px',
        
    },
    /* For the text box */
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '40ch',
      },
      /* For the venue buttons */
    margin: {
        margin: theme.spacing(4),
        left:220,
        top: 100
    },
    venueText: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '600px',
        marginLeft:'220px',        
    },
    eventMargin: {
        margin: theme.spacing(4),
        left:60,
        top: 580 
    }

  }));

 

 

export default function CreateEvent() {
  // This is for the time material UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // This is for the category Dropdown
  const classes = useStyles();
  const [event_category, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  
  return (
    <div className="createPage">
    <h1 className="Title">Let's Create an Event!</h1>
    <h2 className="basicInfo">Basic Info</h2>
    <h2 className="venue">Location</h2>
    <h2 className="dateTime">Date and Time</h2>
    
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
      
      {/*Text input for user to fill out form of basic event info */}
      <div className={classes.root}>
        <TextField
            id="outlined-full-width"
            label="Event Name"
            style={{ margin: 5 }}
            placeholder="Event Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Event Description"
            style={{ margin: 5 }}
            placeholder="Event Description"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
        <TextField
            id="outlined-full-width"
            label="Event Organizer"
            style={{ margin: 5 }}
            placeholder="Event Organizer"
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
        />
      </div>
      

        {/* Event Category dropdown from Material UI*/}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={event_category}
          onChange={handleChange}
          label="Event Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Music</MenuItem>
          <MenuItem value={20}>Sports</MenuItem>
          <MenuItem value={30}>Food</MenuItem>
          <MenuItem value={30}>Charity</MenuItem>
        </Select>
      </FormControl>

        {/* Venue Type Buttons  */}
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Venue
        </Button>   
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Online
        </Button>   
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          To Be Announced
        </Button>  

        {/* Buttons of how often this event would occur */}
        <Button variant="outlined" size="large" color="primary" className={classes.eventMargin}>
          Single Event 
        </Button>   
        <Button variant="outlined" size="large" color="primary" className={classes.eventMargin}>
          Recurrent Event
        </Button>  


   {/* Event Calendar and time from Material UI*/} 
        <KeyboardDatePicker
          className="startDate"
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="start-date"
          label="Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          className="endDate"
          margin="normal"
          id="end-date"
          label="End Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Start Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="End Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
    </div>
  )
}