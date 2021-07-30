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

//Music, Charity, 

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// This is for the category dropdown
const useStyles = makeStyles((theme) => ({
   
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
      
      
    
        
      </Grid>
    </MuiPickersUtilsProvider>
    </div>
  )
}