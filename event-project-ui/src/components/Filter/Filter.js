import Event from '../Event/Event'

export default function Filter ({user, filteredEvents}){
    return (
        <div>
    {filteredEvents.map((event) => (
        <Event event={event} user={user} key={event.id} />
    ))}
    </div>
    )
}