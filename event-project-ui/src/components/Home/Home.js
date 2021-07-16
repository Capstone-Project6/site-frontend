// import { Link } from "react-router-dom"
import partyPhoto from "../../partyPhoto.jpg"
import Event from '../Event/Event'
import './Home.css'

//the Home function takes in an object that is an array of events
export default function Home( { user, isFetching, events, error}){
    const data = [
        { 
            id: 1,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 2,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 3,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 4,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 5,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 6,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 7,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
        {
            id: 8,
            eventImage: partyPhoto,
            eventName: "Loft Party",
            eventDescription: "Check out our fun event!",
            date: "August 2, 2021",
            beginningTime: " 9:00pm",
            endTime: "1:00am"
        },
    ];

    return(
        <div className="home">
            <h1 className="homePageTitle"> Events </h1>
            
            <div className = "feed"> 
                {/* {error ? <h2 className="error">{error}</h2> : null}
                {isFetching ? <h2>Loading...</h2> : null}
                {events?.map((event) => (
                    <Event event={event} key={event.id} />
                ))} */}

                {data.map((event) => (
                    <Event event={event} key={event.id} />
                ))}
            </div>
        </div>
    )
}
// pseudocode: 
//   - Each event is a card
// <div class="card">
//     <img className="eventImage" src=# />
//     <div className="eventCardInfo">
//         <h2 className="eventName"> Event Name</h2>
//         <div className="eventCardDetails"> 
//             <p> Date </p>
//             <p> Time </p>
//             <p> State, City <p/>
//             <p> Venue </p>
//         </div>
//     </div>
// </div> 