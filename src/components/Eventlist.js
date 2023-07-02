import React from "react";
import '../style/Header.css'
import Eventcard from "./Eventcard";
import fastnroadshow from "../images/fastnroadshow.webp"
import flowhackathon from "../images/flowhackathon.webp"

const Eventlist = ()=>{
    const events = [
        {
            title: 'fastn Roadshow Ahmedabad',
            image: fastnroadshow,
            date: 'Saturday, 8 July',
            category: 'Web3 Meetup',
            location: '7Span',
            time: '11:30 AM to 6:00PM',
            website: 'https://lu.ma/fastn-roadshow-ahmedabad',
            status: "Fresh"
        },
        {
            title: 'Flow Hackathon Season 2',
            image: flowhackathon,
            date: 'Jun 15 - Jul 16, 2023',
            category: 'Web3 Hackathon',
            location: 'Online',
            time: 'None',
            website: 'https://flow-hackathon-s2.devfolio.co/',
            status: "Fresh"
        }

    ]
    return (
        <div className="event-list">
            {events.map((event, index)=> (
                <Eventcard key={index} event={event}/>
            ))}
        </div>
    );

}

export default Eventlist;