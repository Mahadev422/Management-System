import { useState } from "react";
import { FaBook, FaCamera, FaCode, FaFilm, FaFlask, FaFutbol, FaGamepad, FaMusic, FaPaintBrush, FaStar, FaTree } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {

  const getCategoryIcon = (category) => {
    const icons = {
      Technology: FaCode,
      Sports: FaFutbol,
      Arts: FaPaintBrush,
      Science: FaFlask,
      Music: FaMusic,
      Photography: FaCamera,
      Literature: FaBook,
      Gaming: FaGamepad,
      Film: FaFilm,
      Environment: FaTree
    };
    const Icon = icons[category] || FaUsers;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Club Header */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-xl ${club.categoryColor} ${club.iconBgColor}`}>
              {getCategoryIcon(club.category)}
            </div>
            <div>
              <Link to={`${club.id}`} className="text-xl font-bold text-gray-900 hover:underline hover:text-blue-700">{club.name}</Link>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${club.categoryColor}`}>
                  {club.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Club Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">{club.description}</p>

        {/* Club Stats */}
        <div className="grid grid-cols-2 gap-4">
          
          <div className="text-center border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-1">
              <HiOutlineUsers className="w-4 h-4" />
              <span className="text-sm">Members</span>
            </div>
            <div className="font-bold text-gray-900">{club.members.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-500 mb-1">
              <span className="text-sm">Rating</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`w-4 h-4 ${i < club.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        
          {/* <Link to={`${club.id}`} className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors">
            View Details
          </Link> */}
      </div>

      {/* Club Footer - Recent Activity */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Recent: </span>
            <span className="font-medium">{club.recentActivity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;