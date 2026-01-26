import React from "react";
import { clubData } from "../../data/clubData";
import { FaTrophy } from "react-icons/fa";

const ClubAchievement = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clubData.achievements.length === 0 ? (<div className="bg-gray-100 p-3 text-center font-bold">
          No Achievements Right Now
        </div>) : 
        (clubData.achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3"
          >
            <FaTrophy className="w-6 h-6 text-yellow-600" />
            <div>
              <div className="font-semibold text-gray-900">
                {achievement.title}
              </div>
              <div className="text-sm text-gray-500">{achievement.year}</div>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
};

export default ClubAchievement;
