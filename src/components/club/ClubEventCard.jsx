import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";

const ClubEventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
          {event.type}
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="w-4 h-4 text-blue-600" />
              <span className="font-bold">{event.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h4 className="font-bold text-gray-900 text-lg">{event.title}</h4>
          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded">
            {event.status}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-gray-500">
              <HiOutlineUsers className="w-4 h-4" />
              <span className="text-sm">{event.participants} going</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <FaMapMarkerAlt className="w-4 h-4" />
              <span className="text-sm">{event.location}</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubEventCard;