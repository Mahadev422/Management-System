import React from "react";
import { userData } from "../../data/profile";
import ParticipatedEventCard from "../../components/profile/ParticipatedEventCard";
import { FaMapMarkerAlt, FaRegCalendarCheck } from "react-icons/fa";

const MyEvents = () => {
  return (
    <div className="space-y-8">
      {/* Participated Events */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Events History</h2>
            <p className="text-gray-600">Events you've participated in</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            View All ({userData.participatedEvents.length})
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {userData.participatedEvents.map((event) => (
            <ParticipatedEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Upcoming Events
        </h2>

        {userData.upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userData.upcomingEvents.map((event) => (
              <div key={event.id} className="bg-blue-50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{event.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-600">
                        {event.date}
                      </span>
                      <span className="text-sm text-gray-600">•</span>
                      <span className="text-sm text-gray-600">
                        {event.time}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    Registered
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <FaRegCalendarCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No upcoming events
            </h3>
            <p className="text-gray-500 mb-4">
              You haven't registered for any upcoming events yet.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Browse Events
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEvents;
