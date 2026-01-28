import { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import ClubEventCard from "../../components/club/ClubEventCard";
import { clubData } from "../../data/clubData";
import { Link } from "react-router-dom";

const upcomingEvents = (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <FaCalendarPlus className="w-5 h-5" />
        <Link to='/events/create-event'>Create Event</Link>
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {clubData.upcomingEvents.map((event) => (
        <ClubEventCard key={event.id} event={event} />
      ))}
    </div>
  </div>
);

const pastEvents = (
  <div className="bg-white rounded-2xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {clubData.pastEvents.map((event) => (
        <div key={event.id} className="bg-gray-50 rounded-xl p-4">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
          <p className="text-sm text-gray-600 mb-3">{event.description}</p>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{event.date}</span>
            <span>{event.participants} participants</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ClubEvent = () => {
  const [events, setEvents] = useState(false);
  console.log(events);
  return (
    <div>
      <div className="p-3 flex gap-4 justify-end">
        <label htmlFor="events">Past Events</label>
        <input
          type="checkbox"
          name="events"
          id="events"
          className="p-2 text-3xl scale-150"
          checked={events}
          onChange={() => setEvents((prev) => !prev)}
        />
      </div>
      
      {events ? pastEvents : upcomingEvents}
    </div>
  );
};

export default ClubEvent;
