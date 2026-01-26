import { useState } from "react";
import {
  FaStar,
  FaUsers,
  FaFlask,
  FaCode,
  FaCertificate,
  FaMusic,
  FaFutbol,
  FaPaintBrush,
  FaGamepad,
  FaUserFriends,
  FaVideo,
} from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineClock,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {

  const getEventTypeIcon = (type) => {
    const icons = {
      Workshop: FaFlask,
      Conference: FaUsers,
      Hackathon: FaCode,
      Seminar: FaCertificate,
      Concert: FaMusic,
      Sports: FaFutbol,
      Art: FaPaintBrush,
      Gaming: FaGamepad,
      Networking: FaUserFriends,
      Webinar: FaVideo,
    };
    const Icon = icons[type] || FaCalendarAlt;
    return <Icon className="w-5 h-5" />;
  };

  const getStatusBadge = (status) => {
    const styles = {
      upcoming: "bg-green-100 text-green-800",
      ongoing: "bg-blue-100 text-blue-800",
      past: "bg-gray-100 text-gray-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <Link to={`${event.id}`}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        </Link>
        <div className="absolute bottom-4 left-4">
          {getStatusBadge(event.status)}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        {/* Event Type */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div
              className={`p-2 rounded-lg ${event.typeColor} ${event.iconBgColor}`}
            >
              {getEventTypeIcon(event.type)}
            </div>
            <span className={`text-sm font-semibold ${event.typeColor}`}>
              {event.type}
            </span>
          </div>

          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-md">
            {event.isFree ? "FREE" : `₹ ${event.price}/-`}
          </span>
        </div>

        {/* Event Title */}
        <Link to={`${event.id}`} className="text-xl hover:text-blue-600 hover:underline font-bold text-gray-900 mb-3 line-clamp-1">
          {event.title}
        </Link>

        {/* Event Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Date */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <HiOutlineCalendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div className="font-semibold text-gray-900">{event.date}</div>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-50 rounded-lg">
              <HiOutlineClock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div className="font-semibold text-gray-900">{event.time}</div>
            </div>
          </div>

          {/* Location */}
          {/* <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <HiOutlineLocationMarker className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-semibold text-gray-900 line-clamp-1">
                {event.location}
              </div>
            </div>
          </div> */}
        </div>

        {/* Organizers */}
        {/* <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">Organized by</div>
          <div className="flex items-center space-x-2">
            {event.organizers.map((organizer, index) => (
              <div key={index} className="flex items-center space-x-2">
                <img
                  src={organizer.avatar}
                  alt={organizer.name}
                  className="w-8 h-8 rounded-full object-cover border-2 border-white shadow"
                />
                <span className="text-sm font-medium text-gray-900">
                  {organizer.name}
                </span>
                {index < event.organizers.length - 1 && (
                  <span className="text-gray-300">•</span>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* Action Buttons */}
        {/* <div className="flex space-x-3">
          <button
            onClick={() => {
              setIsRegistered(!isRegistered);
              onRegister(event.id, !isRegistered);
            }}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isRegistered
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
            }`}
          >
            {isRegistered ? "Registered ✓" : "Register Now"}
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center">
            <FaShareAlt className="w-5 h-5" />
          </button>
        </div> */}
      </div>

      {/* Event Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <FaUsers className="w-4 h-4" />
              <span className="text-sm">
                {event.registered}/{event.capacity} registered
              </span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{event.rating}</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">{event.duration}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
