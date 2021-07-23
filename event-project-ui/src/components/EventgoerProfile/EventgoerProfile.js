import {Link} from 'react-router-dom'
import apiClient from "../../services/apiClient"
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { textAlign } from '@material-ui/system';
import EditIcon from '@material-ui/icons/Edit';
import './EventgoerProfile.css'

const useStyles = makeStyles({
    header: {
        background: "#C4C4C4",
        width: "95%",
        height: 255,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        borderRadius: 20,
    },
    profileHeaderContent: {
        margin: 10,
    },
    avatar: {
        width: 140,
        height: 140,
        alignItems: "center",
    },
    profileHeaderInfo: {
        direction: "column",
        justifyContent :"center",
        alignItems: "center",
        
    },
    userName: {
        fontSize: 30,
        align: "center",
    },
    paddingRight: {
        paddingRight: 100,
    },
    profileTitles: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
    },
});

export default function EventgoerProfile({ user }){
    // const [isUpdating, setIsUpdating] = useState(false)
    // const [profile, setPost] = useState(null)
    // const [caption, setCaption] = useState("")
    // const [city, setCity] = useState("")
    // const [state, setState] = useState("")
    const classes = useStyles();

    // const handleOnUpdate = async () => {
    //     setIsUpdating(true)
    
    //     const postUpdate = { caption, city, state }
    
    //     const { data, error } = await apiClient.updatePost({ postId, postUpdate })
    //     if (data) {
    //       setPost({ ...post, caption: data.post.caption })
    //     }
    //     if (error) {
    //       setError(error)
    //     }
    
    //     setIsUpdating(false)
    //   }

    return (
        <div className="eventgoerProfile">
            <Box className={classes.header}>
                <EditIcon/>
                <Box className={classes.profileHeaderContent}>
                    <Avatar alt="profile picture" src="https://www.seekpng.com/png/full/966-9665493_my-profile-icon-blank-profile-image-circle.png" className={classes.avatar} />
                    <Box className={classes.profileHeaderInfo}>
                        <Typography variant="h5" align="center" component="h1">
                            Profile Name
                        </Typography>
                        <Typography variant="h6" color="textSecondary" align="center" component="h2">
                            From Atlanta, GA
                        </Typography>
                        <Typography variant="h6" color="textSecondary" align="center" component="h2">
                            Following
                        </Typography>
                    </Box>
                </Box>
            </Box>
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