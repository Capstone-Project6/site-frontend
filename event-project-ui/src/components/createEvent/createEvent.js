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
import { positions, width } from '@material-ui/system';
import "./createEvent.css"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

    //For the event description
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100ch',
      marginLeft:'400px'
    },
    // For the venue buttons
    '& > *': {
      margin: theme.spacing(1),
      
    },
    
  },
  //For the text fields 
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40ch',
    margin:'100px',
    
  },
  //dropdown controls
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    marginLeft: '400px',
    marginBottom:'100px'
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  locationInfo: {
    marginLeft: '1000px',
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

 

}));



export default function CreateEvent() {

  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [category, SetCategory] = React.useState('');
  const dropdown = (event) => {
    SetCategory(event.target.value);
  };
  const [state, SetState] = React.useState('');
  const dropdownState = (event) => {
    SetState(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [endDate, setEndDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const endDateChange = (date) => {
    setEndDate(date);
  };


  
  return (
    <div className="createPage">
      <h1 className="Title">Let's Create an Event!</h1>
      <h2 className="basicInfo">Basic Info</h2>
      
      
      <div className={classes.root}>
        <TextField
          id="outlined-full-width"
          label="Event Name"
          style={{ marginBottom: 8, marginLeft: 400 }}
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
          label="Event Organizer"
          style={{ marginBottom: 8, marginLeft:400 }}
          placeholder="Event Organizer"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Event Description"
          multiline
          rows={4}
          defaultValue="Event Description"
          variant="outlined"
        />
        

        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Event Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={category}
          onChange={dropdown}
          label="Category"
        >
        <MenuItem value="">
          <em>None</em>
          </MenuItem>
        <MenuItem value="Sports">Sports</MenuItem>
        <MenuItem value="Food">Food</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        <MenuItem value="Charity">Charity</MenuItem>
        <MenuItem value="Gaming">Gaming</MenuItem>
        <MenuItem value="Party">Party</MenuItem>
        <MenuItem value="Entertainment">Entertainment</MenuItem>
        <MenuItem value="Education">Education</MenuItem>
        <MenuItem value="Business">Business</MenuItem>
        <MenuItem value="Social">Social</MenuItem>
        </Select>
      </FormControl>
      </div>


      <h2 className="venue">Location</h2>
      <div className='locationInfo'>
        <div className={classes.root}>
        <Button variant="outlined" color="primary" style={{marginLeft:"400px"}}>
          Venue
        </Button>
        <Button variant="outlined" color="primary">
          Online
        </Button>
        <Button variant="outlined" color="primary">
          To Be Announced
        </Button>
        <TextField
          id="outlined-full-width"
          label="Venue"
          style={{ margin: 8, marginLeft:400 }}
          placeholder="Venue Name/ Address"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="City"
          id="outlined-size-small"
          defaultValue="City"
          variant="outlined"
          size="small"
        />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          onChange={dropdownState}
          label="State"
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value="AL">Alabama</MenuItem>
          <MenuItem value="AK">Alaska</MenuItem>
          <MenuItem value="AZ">Arizona</MenuItem>
          <MenuItem value="AR">Arizona</MenuItem>
          <MenuItem value="CA">California</MenuItem>
          <MenuItem value="CO">Colorado</MenuItem>
          <MenuItem value="CT">Connecticut</MenuItem>
          <MenuItem value="DE">Delaware</MenuItem>
          <MenuItem value="DC">District of Columbia</MenuItem>
          <MenuItem value="FL">Florida</MenuItem>
          <MenuItem value="GA">Georgia</MenuItem>
          <MenuItem value="HI">Hawaii</MenuItem>
          <MenuItem value="ID">Idaho</MenuItem>
          <MenuItem value="IL">Illinois</MenuItem>
          <MenuItem value="IN">Indiana</MenuItem>
          <MenuItem value="IA">Iowa</MenuItem>
          <MenuItem value="KS">Kansas</MenuItem>
          <MenuItem value="KY">Kentucky</MenuItem>
          <MenuItem value="LA">Louisiana</MenuItem>
          <MenuItem value="ME">Maine</MenuItem>
          <MenuItem value="MD">Maryland</MenuItem>
          <MenuItem value="MA">Massachusetts</MenuItem>
          <MenuItem value="MI">Michigan</MenuItem>
          <MenuItem value="MN">Minnesota</MenuItem>
          <MenuItem value="MS">Mississippi</MenuItem>
          <MenuItem value="MO">Missouri</MenuItem>
          <MenuItem value="MT">Montana</MenuItem>
          <MenuItem value="NE">Nebraska</MenuItem>
          <MenuItem value="NV">Nevada</MenuItem>
          <MenuItem value="NH">New Hampshire</MenuItem>
          <MenuItem value="NJ">New Jersey</MenuItem>
          <MenuItem value="NM">New Mexico</MenuItem>
          <MenuItem value="NY">New York</MenuItem>
          <MenuItem value="NC">North Carolina</MenuItem>
          <MenuItem value="ND">North Dakota</MenuItem>
          <MenuItem value="OH">Ohio</MenuItem>
          <MenuItem value="OK">Oklahoma</MenuItem>
          <MenuItem value="OR">Oregon</MenuItem>
          <MenuItem value="PA">Pennsylvania</MenuItem>
          <MenuItem value="RI">Rhode Island</MenuItem>
          <MenuItem value="SC">South Carolina</MenuItem>
          <MenuItem value="SD">South Dakota</MenuItem>
          <MenuItem value="TN">Tennessee</MenuItem>
          <MenuItem value="TX">Texas</MenuItem>
          <MenuItem value="UT">Utah</MenuItem>
          <MenuItem value="VT">Vermont</MenuItem>
          <MenuItem value="VA">Virginia</MenuItem>
          <MenuItem value="WA">Washington</MenuItem>
          <MenuItem value="WV">West Virginia</MenuItem>
          <MenuItem value="WI">Wisconsin</MenuItem>
          <MenuItem value="WY">Wyoming</MenuItem>
        </Select>
      </FormControl>
        </div>
      </div>
      
      <h2 className="time">Time</h2>
      <div className="timeInfo">
        <div className={classes.root}>
        <Button variant="outlined" color="primary" style={{marginLeft:"400px"}}>
          Single Event
        </Button>
        <Button variant="outlined" color="primary">
          Recurring Event
        </Button>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
      <KeyboardDatePicker
          margin="normal"
          id="start-date"
          label="Start Date"
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
        <KeyboardDatePicker
          margin="normal"
          id="end-date"
          label="End Date"
          format="MM/dd/yyyy"
          value={endDate}
          onChange={endDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="End Time"
          value={endDate}
          onChange={endDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
      </MuiPickersUtilsProvider>
        </div>
      </div>
      <h2 className="picture">Upload a Poster!</h2>
      <div className="upload">
        <div className={classes.root}>
        <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{marginLeft:"490px"}}>
          Upload
        </Button>
      </label>
        </div>

      <h2 className="completed">You're Done! Time to Submit!</h2>
      </div>

      <Button variant="contained" size="medium" color="primary" className={classes.margin} style={{marginLeft:"500px"}}>
        SUBMIT
      </Button>

    
      


    

      
      
    
        
      
    </div>
  )
}