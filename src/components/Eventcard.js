import React from "react";
import '../style/Eventcard.css';


const Eventcard = ({ event }) => {
    
    return (
        <div class="event-card">
            <div class="event-image">
                <img src={event.image} alt="Event Image" />
            </div>
            <div class="event-details">
                <h3 class="event-title">{event.title}</h3>
                <p class="event-date">Date: {event.date}</p>
                <p class="event-category">Category: {event.category}</p>
                <p class="event-location">Location: {event.location}</p>
                <p class="event-time">Time: {event.time}</p>
                <p class="event-status">Status: {event.status}</p>
                <a href={event.website} class="event-link">Learn More</a>
            </div>
        </div>

    )
}

export default Eventcard;