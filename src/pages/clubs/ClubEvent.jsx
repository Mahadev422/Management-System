import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import EventCard from "../../components/club/EventCard";
import { clubData } from "../../data/clubData";

const ClubEvent = () => {
  return (
    <div className="space-y-8">
      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <FaCalendarPlus className="w-5 h-5" />
            <span>Create Event</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubData.upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Past Events */}
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
    </div>
  );
};

export default ClubEvent;
