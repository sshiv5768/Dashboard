import EventCard from "./Eventcard";
export default function EventList() {

    const eventData = [
        {
            eventName: "Hack This Fall 2024",
            eventDescription: "Dive into innovation at Hack This Fall Hackathon, where collaboration meets creativity! Join us in cultivating a beginner-friendly space for diverse minds to unite, ideate, and bring meaningful projects to life – experience the true essence of a hackathon journey.",
            eventImage: "../images/2-2.png"
        },

    ]

  return (
    <div className="flex justify-center overflow-x-auto p-4">
    {eventData.map((event, index) => (
        <EventCard key={index} {...event}/>
    ))}
    </div>
  );
}