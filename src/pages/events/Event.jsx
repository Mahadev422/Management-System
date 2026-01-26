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
import EventBasicInfo from "../../components/event/EventBasicInfo";

// Main Event Detail Page
const Event = () => {
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
        <EventBasicInfo />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="bg-white rounded shadow-lg mb-8 overflow-hidden">
              <div className="flex justify-around overflow-x-auto no-scroll">
                {[
                  { name: "Overview", link: "" },
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
