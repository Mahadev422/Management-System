import React from "react";
import { FaSearch } from "react-icons/fa";
import MemberCard from "../../components/club/MemberCard";
import { clubData } from "../../data/clubData";

const EventParticipants = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Event Participants</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {clubData.members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors">
          View All {clubData.stats.members} Members
        </button>
      </div>
    </div>
  );
};

export default EventParticipants;
