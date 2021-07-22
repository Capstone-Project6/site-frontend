import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "./createEvent.css"

//Add City and State

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// This is for the category dropdown
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
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
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
      
      
      <h3 className="eventName">Event Name</h3>
      <h3 className="eventName">Event Organizer</h3>
      <h3 className="eventDescription">Event Description</h3>

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