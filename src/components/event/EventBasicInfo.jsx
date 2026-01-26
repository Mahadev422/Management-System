import React from "react";
import { FaHeart, FaRegHeart, FaShareAlt, FaTicketAlt } from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { eventData } from "../../data/eventData";

const EventBasicInfo = () => {
  return (
    <div className="container mx-auto px-6 relative -mt-48">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                {eventData.type}
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                {eventData.status === "upcoming" ? "Upcoming" : "Past Event"}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {eventData.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">{eventData.tagline}</p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <HiOutlineCalendar className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Date</div>
                  <div className="font-bold text-gray-900">
                    {eventData.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-purple-100 rounded-xl">
                  <HiOutlineClock className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-sm">
                  <div className=" text-gray-500">Time</div>
                  <div className="font-bold text-gray-900">
                    {eventData.time}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-green-100 rounded-xl">
                  <HiOutlineLocationMarker className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Venue</div>
                  <div className="font-bold  text-gray-900 line-clamp-1">
                    {eventData.venue.name}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2 bg-orange-100 rounded-xl">
                  <HiOutlineUserGroup className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-sm">
                  <div className="text-gray-500">Capacity</div>
                  <div className="font-bold text-gray-900">
                    {eventData.registration.registered}/
                    {eventData.registration.capacity}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4">
            <div className="grid gap-2">
              <button
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  false
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
                }`}
              >
                <FaTicketAlt className="w-6 h-6" />
                <span>{false ? "Registered ✓" : "Register Now"}</span>
              </button>
              <div className="flex space-x-3">
                <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <FaShareAlt className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Registration Status */}
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="text-center">
                <div className="text-sm text-gray-600">
                  Registration closes in
                </div>
                <div className="text-xl font-bold text-blue-600">2 days</div>
                <div className="text-sm text-gray-500 mt-1">
                  {eventData.registration.fee > 0
                    ? `$${eventData.registration.fee}`
                    : "Free Entry"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBasicInfo;
