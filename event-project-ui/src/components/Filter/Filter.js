import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Event from '../Event/Event'
import InputLabel from '@material-ui/core/InputLabel';
// import option from '@material-ui/core/option';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import './Filter.css'
import { useState } from 'react';
import apiClient from '../../services/apiClient';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  searchResults: {
    height: 700,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }

}));

export default function Filter ({user, filteredEvents}){
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [greatestPrice, setGreatestPrice] = useState(0)
  const [lowestPrice, setLowestPrice] = useState(0)
  const [hasLowestPrice, setHasLowestPrice] = useState(false)
  const [hasGreatestPrice, setHasGreatestPrice] = useState(false)
  const [indexValue, setIndexValue] = useState(0)
  const[filterCriteria, setFilterCriteria] = useState({})
  const priceRanges = [
    [null, null],
    [null, 10],
    [null, 20],
    [20, 30],
    [30, 40],
    [40, 50],
    [50, null]
  ];
  
  useEffect(() => {
    let minValue = 0
    let maxValue = 0
    let ranges = priceRanges[indexValue]

    if (ranges !== undefined){
    if (ranges[0] === null){
      minValue = 0
    }
    else {
      minValue = ranges[0]
    }
    if (ranges[1] === null){
      maxValue = 0
    }
    else{
      maxValue = ranges[1]
    }
  }
  else{
    return
  }

    let price = {
      "minValue": minValue,
      "maxValue": maxValue
    }
    setFilterCriteria(price)

  }, [indexValue])


  console.log("changed index value", indexValue)
  console.log(filterCriteria)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnInputChange = (event) => {
    // setIndexValue(parseInt(event.target[event.target.selectedIndex].value))
    setIndexValue(parseInt(event.target.value))
  }

  const handleOnClick = async () => {
    await apiClient.filterEvents({filterCriteria})
  }


    return (
        <div className={classes.searchResults}>
            <div className={classes.root}>
      <CssBaseline />
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          </Typography>
        </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

            <ListItem button>
              <ListItemText primary="Price"/>
              
              <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
        <Select 
          native 
          defaultValue=""
          value={indexValue}
          name="indexValue"
          onChange={handleOnInputChange}
          id="grouped-native-select"
        >
          <option aria-label="None" value="" />
            <option value={0}>Free</option>
            <option value={1}>Under $10</option>
            <option value={2}>Under $20</option>
            <option value={3}>$20 - $30</option>
            <option value={4}>$30 - $40</option>
            <option value={5}>$40 - $50</option>
            <option value={6}>Over $50</option>
          
        </Select>
      </FormControl>
    </div>
            </ListItem>
        </List>
        <Divider />
        {/* <Divider />
        <List>

            <ListItem button>
              <ListItemText primary="Category"/>
              
              <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
        <Select 
          native 
          defaultValue=""
          value={indexValue}
          name="indexValue"
          onChange={handleOnInputChange}
          id="grouped-native-select"
        >
          <option aria-label="None" value="" />
            <option value={0}>Music</option>
            <option value={1}>Sports</option>
            <option value={2}>Charity</option>
            <option value={3}>Food</option>
            <option value={4}>Gaming</option>
            <option value={5}>Entertainment</option>
            <option value={6}>Business</option>
          
        </Select>
      </FormControl>
    </div>
            </ListItem>
        </List>
        <Divider />

        <Divider />
        <List>

            <ListItem button>
              <ListItemText primary="Location"/>
              
              <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Filter</InputLabel>
        <Select 
          native 
          defaultValue=""
          value={indexValue}
          name="indexValue"
          onChange={handleOnInputChange}
          id="grouped-native-select"
        >
          <option aria-label="None" value="" />
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
          
        </Select>
      </FormControl>
    </div>
            </ListItem>
        </List>
        <Divider /> */}

        <Button onClick={handleOnClick}>Apply Filters</Button>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
    </div>
    <div className="feed">
    {filteredEvents.map((event) => (
        <Link to={`/eventRegistration/${event["Event ID"]}`} className="indivEvent" key={event["Event ID"]}>
                                    <Event event={event} user={user} key={event["Event ID"]} />
                                </Link>
    ))}
    </div>
    </div>
    )
}
