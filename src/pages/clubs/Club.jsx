import { useState } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaShareAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaRegHeart,
  FaRegCalendar,
  FaUserPlus,
  FaCheck,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineGlobe } from "react-icons/hi";
import { clubData } from "../../data/clubData";
import { Link, Outlet } from "react-router-dom";
import BasicInfo from "../../components/club/BasicInfo";

const Club = () => {

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section with Cover Image */}
      <div className="relative">
        <div className="h-64 md:h-80 overflow-hidden">
          <img
            src={clubData.coverImage}
            alt="Club Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Club Basic Info */}
        <BasicInfo />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
              <div className="flex justify-around overflow-x-auto">
                {[
                  { name: "Overview", link: "" },
                  { name: "Members", link: "members" },
                  { name: "Events", link: "events" },
                  { name: "Gallery", link: "gallery" },
                  { name: "Requests", link: "requests" },
                ].map((tab, i) => (
                  <Link
                    key={i}
                    to={tab.link}
                    className={`px-4 py-3 font-semibold whitespace-nowrap transition-colors
                      hover:bg-blue-100`}
                  >
                    {tab.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <Outlet />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Club Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Club Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Founded</div>
                    <div className="font-medium">
                      {clubData.details.founded}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">
                      Meeting Location
                    </div>
                    <div className="font-medium">
                      {clubData.details.meetingLocation}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaRegCalendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Schedule</div>
                    <div className="font-medium">
                      {clubData.details.meetingSchedule}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineGlobe className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Website</div>
                    <a
                      href={clubData.details.website}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {clubData.details.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineMail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a
                      href={`mailto:${clubData.details.email}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {clubData.details.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href={clubData.socialMedia.instagram}
                  className="p-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:shadow-lg"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href={clubData.socialMedia.twitter}
                  className="p-3 bg-blue-400 text-white rounded-xl hover:shadow-lg"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href={clubData.socialMedia.linkedin}
                  className="p-3 bg-blue-700 text-white rounded-xl hover:shadow-lg"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href={clubData.socialMedia.youtube}
                  className="p-3 bg-red-600 text-white rounded-xl hover:shadow-lg"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Join Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Requirements to Join
              </h3>
              <ul className="space-y-3">
                {clubData.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
