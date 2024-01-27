import EventCard from "./Eventcard";
import React, {useState, useEffect} from "react";

export default function EventList() {
   
    const [eventData, setEventData] = useState([ ]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/src/components/events.json');
          const data = await response.json();
          setEventData(data);
        }
        catch (error){
          console.error('Error fetching data!', error);
        }
      }
      fetchData();
    }, []);

  return (
    <div className="flex justify-center flex-wrap overflow-x-auto overflow-y-auto p-4 ">
    {eventData.map((event, index) => (
      <div className="mx-2 my-2">
        <EventCard key={index} {...event}/> 
      </div>  
    ))}
    </div>
  );
}