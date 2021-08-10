import {useState, useEffect } from "react"
// import {Link} from 'react-router-dom'
import axios from 'axios';
import apiClient from "../../services/apiClient"
import Event from "../Event/Event";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import { textAlign } from '@material-ui/system';
import EditIcon from '@material-ui/icons/Edit';
import './EventgoerProfile.css'

const useStyles = makeStyles({
    header: {
        background: "#C4C4C4",
        width: "95%",
        height: 255,
        margin: "auto",
        borderRadius: 5,
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    profileHeaderContent: {
        // margin: "auto",
        width: "40%",
    },
    avatar: {
        width: 140,
        height: 140,
    },
    avatarContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileHeaderInfo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    userName: {
        fontSize: 30,
    },
    paddingRight: {
        paddingRight: 100,
    },
    profileTitles: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        background: "#C4C4C"
    },
    editButton: {
        height: 25,
    },
    buttonAndDialog: {
        width: 200,
    },
    editBox: {
        width: 150,
        height: 40,
        background:"grey",
        color:"white",
    },
    profileTabsContainer: {
        width: "95%"
    },
    profileTabs: {
        flexGrow: 1,
    }
});

export default function EventgoerProfile({ user, setUser }){
    //this is the current user's id
    const userId = user.id
    const [error, setError] = useState(null)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [registeredEvents, setRegisteredEvents] = useState([])
    const [attendedEvents, setAttendedEvents] = useState([])
    const [recommendations, setRecommendations] = useState([])
    const [reviews, setReviews] = useState([])
    const [userHasRegisteredEvents, setUserHasRegisteredEvents] = useState(false)
    const [userHasAttendedEvents, setUserHasAttendedEvents] = useState(false)
    const [userHasRecommendations, setUserHasRecommendations] = useState(false)
    const [userHasReviews, setUserHasReviews] = useState(false)
    const [currentButtonClicked, setCurrentButtonClicked] = useState(0)

    // useEffect(() => {
    //     const fetchRegisteredEvents = async () => {
    //         setIsFetching(true)
    //         const { data} = await apiClient.registeredEvents(userId)
    //         if (data) {
    //             setRegisteredEvents(data.registeredEvents)
    //             setUserHasRegisteredEvents(true)
    //         }
    //         setIsFetching(false)
    //     }
    //     fetchRegisteredEvents()
    // }, [])

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    //     console.log("current value", value)
    // };

     const handleChange = (value) => {
        setCurrentButtonClicked(value);
        console.log("current value", value)
        return;
    };

    //This profile update is being sent to the endpoint that is reached by the editProfile function
    const[profileUpdate, setProfileUpdate] = useState({
        profile_picture: "",
        city: "",
        state: "",
    })

    //CLOUDINARY CONFIGURATION:
    //The image to be uploaded
    const [image, setImage] = useState("");
    //The link to be uploaded to cloudinary
    // const [ url, setUrl ] = useState("");

    const uploadImage = () => {
        //data holds key/value pairs 
        const data = new FormData();
        data.append("file", image);

        //The upload preset defines the default behavior for uploads
        data.append("upload_preset", "profilePic");
        //cloudinary dashboard account
        data.append("cloud_name","sitegroup6");

        const options = {
            method: "POST",
            body: data,
        };

        return fetch(
            "https://api.cloudinary.com/v1_1/sitegroup6/image/upload",
            options
        )
            .then(resp => resp.json())
            .then(data => {
                setProfileUpdate(profileUpdate => ({...profileUpdate, profile_picture: data.url})
            )})
            .catch(err => setError(err))
    };

    useEffect(() => {    
        setUser(userData => ({...userData, profile_picture: profileUpdate.profile_picture}))
        // handleOnUpdate()
    }, [profileUpdate.profile_picture])
        
    // console.log("UPLOADED IMAGE LINK", url)

    const handleOnInputChange = (event) => {
        setProfileUpdate((u) => ({ ...u, [event.target.name]: event.target.value }))
    }
    
    //This function is run after the "submit" button is clicked on the pop-up
    const handleOnUpdate = async () => {
        setIsUpdating(true)
        setError((e) => ({ ...e, profileUpdate: null }))

        const { data, error } = await apiClient.editProfile({profileUpdate,  userId })
        if (data) {
            setUser(data => ({...data, city: profileUpdate.city, state: profileUpdate.state, profile_picture: profileUpdate.profile_picture}))
        }
        if (error) {
            setError(error)
        }
        
        setIsUpdating(false)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    
    const classes = useStyles();
    
    const handleProfileTabContent = () => {
        console.log("registered events", registeredEvents)
        if(currentButtonClicked === 0) {
            if(userHasRegisteredEvents === true){
                return (
                        <div className="feed">
                            {registeredEvents.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))}
                        </div>
                )
            }
            else {
                return (
                    <div>
                        <h2> You do not currently have any registered events.</h2>
                    </div>
                )
            }
        }

        if(currentButtonClicked === 1) {
            if(userHasAttendedEvents === true){
                return (
                        <div className="feed">
                            {attendedEvents.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))}
                        </div>
                )
            }
            else {
                return (
                    <div>
                        <h2> You do not currently have any previously attended events.</h2>
                    </div>
                )
            }
        }

        if(currentButtonClicked === 2) {
            if(userHasRecommendations === true){
                return (
                        <div className="feed">
                            {recommendations.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))}
                        </div>
                )
            }
            
            else {
                return (
                    <div>
                        <h2> You do not currently have any recommendations.</h2>
                    </div>
                )
            }
        }

        if(currentButtonClicked === 3) {
            if(userHasReviews === true){
                return (
                        <div className="feed">
                            {reviews.map((event) => (
                                <Event event={event} user={user} key={event.id} />
                            ))}
                        </div>
                )
            }
            
            else {
                return (
                    <div>
                        <h2> You do not currently have any reviews.</h2>
                    </div>
                )
            }
        }
    };

    return (
        <div className="eventgoerProfile">
            <Grid container className={classes.header}>
            {/* <div className="header"> */}
                <Box container item className={classes.profileHeaderContent}>
                    <Grid container className={classes.avatarContainer}>
                        <Avatar alt="profile picture" src={user.profile_picture} className={classes.avatar} />
                    </Grid>
                    <Grid container className={classes.profileHeaderInfo}>
                        <Typography variant="h5" align="center" component="h1">
                           {user.first_name} {user.last_name}
                        </Typography> 
                        <Typography variant="h6" color="textSecondary" align="center" component="h2">
                            From {user.city}, {user.state}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" align="center" component="h2">
                            Following
                        </Typography>
                    </Grid>
                </Box>
                <Grid className={classes.editBox}>
                    {/* below is the pop up button */}
                    {/* variant="outlined */}
                    <Button className={classes.editButton} onClick={handleClickOpen}>
                        Edit Profile <EditIcon/>
                    </Button>
                    {/* <EditIcon/> */}
                    {/* below is the pop up: */}
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Feel free to personalize your profile!
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="name"
                                type="file"
                                onChange={(e)=> setImage(e.target.files[0])}
                                InputProps={{ disableUnderline: true }}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="City"
                                type="text"
                                fullWidth
                                value={profileUpdate.city} 
                                onChange={handleOnInputChange}
                                name="city"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="State"
                                type="text"
                                fullWidth
                                value={profileUpdate.state} 
                                onChange={handleOnInputChange}
                                name="state"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={() => {uploadImage(); handleOnUpdate(); handleClose();}} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
            <Box className={classes.profileTitles} >
                <Box className={classes.profileTabsContainer}>
                    <Paper className={classes.profileTabs}>
                        <Tabs
                            // value={value}
                            value={currentButtonClicked}
                            // onChange={handleChange}
                            onChange={(event, value) => { handleChange(value) }} 
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Registered Events"  value={0}/>
                            <Tab label="Attended Events" value={1}/>
                            <Tab label="Recommendations" value={2}/>
                            <Tab label="Reviews" value={3} />
                        </Tabs>
                    </Paper>
                </Box>
            </Box>

            <Box className={classes.profileTabContent}>
                {handleProfileTabContent()}
            </Box>

            
        </div>
    )
}

