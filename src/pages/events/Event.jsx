import React, { useState } from "react";
import {
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaTicketAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTrophy,
} from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

import { eventData } from "../../data/eventData";
import PersonCard from "../../components/event/PersonCard";
import EventInfo from "../../components/event/EventInfo";

// Main Event Detail Page
const Event = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Sample event data

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section with Cover Image */}
      <div className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src={eventData.coverImage}
            alt="Event Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Event Basic Info Overlay */}
        <div className="container mx-auto px-6 relative -mt-48">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold">
                    {eventData.type}
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                    {eventData.status === "upcoming"
                      ? "Upcoming"
                      : "Past Event"}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {eventData.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                  {eventData.tagline}
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <HiOutlineCalendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Date</div>
                      <div className="font-bold text-gray-900">
                        {eventData.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <HiOutlineClock className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Time</div>
                      <div className="font-bold text-gray-900">
                        {eventData.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <HiOutlineLocationMarker className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Venue</div>
                      <div className="font-bold text-gray-900 line-clamp-1">
                        {eventData.venue.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <HiOutlineUserGroup className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Capacity</div>
                      <div className="font-bold text-gray-900">
                        {eventData.registration.registered}/
                        {eventData.registration.capacity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setIsRegistered(!isRegistered)}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isRegistered
                      ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      : "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
                  }`}
                >
                  <FaTicketAlt className="w-6 h-6" />
                  <span>{isRegistered ? "Registered ✓" : "Register Now"}</span>
                </button>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isFavorite
                        ? "bg-red-50 text-red-600 hover:bg-red-100"
                        : "border border-gray-300 text-gray-700 hover:border-red-300 hover:text-red-600"
                    }`}
                  >
                    {isFavorite ? (
                      <FaHeart className="w-5 h-5" />
                    ) : (
                      <FaRegHeart className="w-5 h-5" />
                    )}
                    <span>{isFavorite ? "Saved" : "Save"}</span>
                  </button>

                  <button className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
                    <FaShareAlt className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Registration Status */}
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">
                      Registration closes in
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      2 days
                    </div>
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
              <div className="flex overflow-x-auto no-scroll">
                {[
                  { name: "Overview", link: "" },
                  { name: "Schedule", link: "schedule" },
                  { name: "Chief Guests", link: "chief-quest" },
                  { name: "Participants", link: "participants" },
                  { name: "Gallery", link: "gallery" },
                ].map((tab, i) => (
                  <Link
                    key={i}
                    to={tab.link}
                    className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors 
                      text-gray-600 hover:text-black hover:bg-blue-200
                    `}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>
            <Outlet />

            {activeTab === "speakers" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Meet Our Speakers
                  </h2>
                  <p className="text-gray-600">
                    Industry leaders and experts sharing their knowledge
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventData.speakers.map((speaker) => (
                    <PersonCard key={speaker.id} person={speaker} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <EventInfo />
        </div>
      </div>
    </div>
  );
};

export default Event;
