import React from 'react';
import htf from '../images/2-2.png'

const EventCard = ({ eventName, eventDescription, eventImage, eventLink}) => {
    
  const handleButtonClick = () => {
        window.location.href = eventLink;
    };

  return (
    <div className='flex justify-center'>
     <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={eventImage}
      alt="card" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {eventName}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    {eventDescription}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button" onClick={handleButtonClick}>
      Register Now
    </button>
  </div>
</div>
    </div>
     
  );
}

export default EventCard;