import {useState, useEffect } from "react"
// import {Link} from 'react-router-dom'
import axios from 'axios';
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
        margin: 20,
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
    }
});

export default function EventgoerProfile({ user, setUser }){
    //this is the current user's id
    const userId = user.id
    const [error, setError] = useState(null)
    const [isUpdating, setIsUpdating] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [open, setOpen] = useState(false);

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
    
    return (
        <div className="eventgoerProfile">
            <Grid container className={classes.header}>
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