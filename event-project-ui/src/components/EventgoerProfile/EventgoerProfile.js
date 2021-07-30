import {useState, useEffect } from "react"
// import {Link} from 'react-router-dom'
import apiClient from "../../services/apiClient"
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
// import { textAlign } from '@material-ui/system';
import EditIcon from '@material-ui/icons/Edit';
import './EventgoerProfile.css'

const useStyles = makeStyles({
    header: {
        background: "#C4C4C4",
        width: "95%",
        height: 255,
        margin: "auto",
        borderRadius: 20,
        direction: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    profileHeaderContent: {
        margin: "auto",
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
        margin: 20,
    },
    editButton: {
        height: 25,
        borderRadius: 20,
    },
    buttonAndDialog: {
        width: 200,
    },
    editBox: {
        position: "absolute",
        width: 200,
        marginRight: "75%",
        marginBottom: "15%",
    }
});

// //This function is fetching the current user's profile
// const fetchUserProfile = async({ userId, setIsFetching, setError, setUser, setprofilePicture, setCity, setState}) => {
//     setIsFetching(true)

//     //the user's data is fetching using the auth/me endpoint
//     const{ data, error } = await apiClient.fetchUserFromToken()

//     if(data) {
//         //The user's data is set using setUser (imported from app.js)
//         setUser(data.user)
//         //current profile picture is set
//         setprofilePicture(data.user.profile_picture)
//         //current city is set
//         setCity(data.user.city)
//         //current state is set
//         setState(data.user.state)
//     }
//     if(error) {
//         setError(error)
//     }

//     setIsFetching(false)
// }

export default function EventgoerProfile({ user, setUser }){
    //!!! (not sure how to get the user's id)
    //this is the current user's id
    const userId = user.id
    const [error, setError] = useState(null)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    // const [profilePicture, setprofilePicture] = useState("")
    // const [city, setCity] = useState("")
    // const [state, setState] = useState("")
    const [open, setOpen] = useState(false);
    const[profileUpdate, setProfileUpdate] = useState({
        profile_picture: "",
        city: "",
        state: "",
    })

    const classes = useStyles();

    //the useEffect calls the fetchUserProfile function and uses the above const as parameters
    // useEffect(() => {
    //     fetchUserProfile({ userId, setIsFetching, setError, setUser, setprofilePicture, setCity, setState})
    // }, [userId, setUser])
    //!!! (not usre how to correctly set up the useEffect)
    //, [userId, setUser])

    const handleOnInputChange = (event) => {
        setProfileUpdate((u) => ({ ...u, [event.target.name]: event.target.value }))
    }

    //This function is run after the "submit" button is clicked on the pop-up
    const handleOnUpdate = async () => {
        setIsUpdating(true)
        setError((e) => ({ ...e, profileUpdate: null }))
        // console.log("user", user)
        const { data, error } = await apiClient.editProfile({ profileUpdate, userId })

        // console.log("DATA FROM editProfile(): ", data)
        // console.log("profileUpdate:", profileUpdate)
        // console.log("Current user id", userId)

        const updatedUser = await apiClient.fetchUserFromToken()
        console.log(updatedUser)
        // const { updatedUser } = await apiClient.fetchUserFromToken()
        if (data) {
        // setUser(updatedUser.user)
          setUser(updatedUser.data.user)
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
    

    return (
        <div className="eventgoerProfile">
            <Grid container className={classes.header}>
                <Box className={classes.editBox}>
                    {/* below is the pop up button */}
                    <Button variant="outlined" color="primary" className={classes.editButton} onClick={handleClickOpen}>
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
                                InputProps={{ disableUnderline: true }}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Profile Picture"
                                type="text"
                                fullWidth
                                value={profileUpdate.profile_picture} 
                                onChange={handleOnInputChange}
                                name="profile_picture"
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
                            <Button onClick={() => { handleOnUpdate(); handleClose();}} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                <Grid container item className={classes.profileHeaderContent}>
                    <Grid container item className={classes.avatarContainer}>
                        <Avatar alt="profile picture" src={user.profile_picture} className={classes.avatar} />
                    </Grid>
                    <Grid container item className={classes.profileHeaderInfo}>
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
                </Grid>
            </Grid>
            <Grid container className={classes.profileTitles} >
                <Grid item className={classes.paddingRight}>
                    <Typography color="primaryMain"> Upcoming Events</Typography>
                </Grid>
                <Grid item className={classes.paddingRight}>
                    <Typography> Attended Events</Typography>
                </Grid>
                <Grid item className={classes.paddingRight}>
                    <Typography> Recommended Events</Typography>
                </Grid>
                <Grid item>
                    <Typography> Reviews </Typography>
                </Grid>
            </Grid>
        </div>
    )
}