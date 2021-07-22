import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CreateEvent() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return (
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
      <h1 className="Title">Let's Create an Event!</h1>
      <h2 className="basicInfo">Basic Info</h2>
      <h3 className="eventName">Event Organizer</h3>
      <h3 className="eventDescription">Event Description</h3>
    
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
          className="startTime"
          margin="normal"
          id="start-time"
          label="Start Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardTimePicker
          className="endTime"
          margin="normal"
          id="end-time"
          label="End Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );

}