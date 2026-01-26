import {
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";
import { eventData } from "../../data/eventData";

const EventOverview = () => {
  return (
    <div className="space-y-8">
      {/* Event Description */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About This Event
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">{eventData.description}</p>
          <div className="bg-gray-50 p-6 rounded-xl mb-6">
            <p className="text-gray-700 whitespace-pre-line">
              {eventData.detailedDescription}
            </p>
          </div>

          {/* Event Highlights */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Event Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eventData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg"
                >
                  <FaCheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Venue Details */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-2">
              {eventData.venue.name}
            </h4>
            <p className="text-gray-600 mb-4">{eventData.venue.address}</p>
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
          <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
            <div className="text-center">
              <FaMapMarkerAlt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View on Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Details */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
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
    </div>
  );
};

export default EventOverview;
