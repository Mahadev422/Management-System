import React from "react";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { eventData } from "../../data/eventData";

const EventInfo = () => {
  return (
    <div className="block">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href={`mailto:${eventData.contact.email}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {eventData.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <a
                    href={`tel:${eventData.contact.phone}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {eventData.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Website</div>
                  <a
                    href={eventData.contact.website}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {eventData.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {Object.entries(eventData.contact.social).map(
                ([platform, url]) => {
                  const Icon = {
                    twitter: FaTwitter,
                    instagram: FaInstagram,
                    linkedin: FaLinkedin,
                    youtube: FaYoutube,
                  }[platform];
                  const colors = {
                    twitter: "bg-blue-400",
                    instagram: "bg-gradient-to-r from-pink-500 to-purple-500",
                    linkedin: "bg-blue-700",
                    youtube: "bg-red-600",
                  }[platform];

                  return (
                    <a
                      key={platform}
                      href={url}
                      className={`p-4 ${colors} text-white rounded-xl hover:shadow-lg transition-shadow`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Registration Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Registration Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Registration Fee:</span>
                <span className="font-bold text-lg">
                  {eventData.registration.isFree
                    ? "FREE"
                    : `$${eventData.registration.fee}`}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Registration Deadline:</span>
                <span className="font-bold">
                  {eventData.registration.deadline}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Available Spots:</span>
                <span className="font-bold">
                  {eventData.registration.capacity -
                    eventData.registration.registered}{" "}
                  remaining
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-gray-900 mb-3">Requirements</h4>
            <ul className="space-y-2">
              {eventData.registration.requirements.map((req, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Building & Room</div>
                  <div className="font-medium">
                    {eventData.venue.building}, {eventData.venue.room}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaUsers className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Capacity</div>
                  <div className="font-medium">
                    {eventData.venue.capacity} people
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="font-medium">{eventData.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
