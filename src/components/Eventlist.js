import EventCard from "./Eventcard";
import htf from "../images/2-2.png"
import aws from "../images/AWS_CommunityDay_Ahmedabad.png"
export default function EventList() {

    const eventData = [
        {
            eventName: "Hack This Fall 2024",
            eventDescription: "Dive into innovation at Hack This Fall Hackathon, where collaboration meets creativity! Join us in cultivating a beginner-friendly space for diverse minds to unite, ideate, and bring meaningful projects to life – experience the true essence of a hackathon journey.",
            eventImage: 'https://dashboard-event-pics.s3.ap-south-1.amazonaws.com/2-2.png',
            eventLink: 'https://hackthisfall.tech/'
        },
        {
          eventName: "AWS Community Day Ahmedabad 2024",
          eventDescription: "Embark on a cloud journey at AWS Community Day Ahmedabad! Join us live on January 21st for a day of insights, networking, and cutting-edge discussions in the heart of AWS innovation.",
          eventImage: 'https://dashboard-event-pics.s3.ap-south-1.amazonaws.com/AWS_CommunityDay_Ahmedabad.png',
          eventLink: 'https://awsahmedabad.community/'
        }

    ]

  return (
    <div className="flex justify-center overflow-x-auto p-4">
    {eventData.map((event, index) => (
        <EventCard key={index} {...event}/>
    ))}
    </div>
  );
}