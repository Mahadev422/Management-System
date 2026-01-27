import React from "react";
import { FaEdit } from "react-icons/fa";
import { userData } from "../../data/profile";

const ProfileOverview = () => {
  return (
    <div className="space-y-8">
      {/* Academic Information */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Academic Information
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-semibold">
            <FaEdit className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500">University</div>
              <div className="font-bold text-gray-900 text-lg">
                {userData.academic.university}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Degree</div>
              <div className="font-bold text-gray-900">
                {userData.academic.degree}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Department</div>
              <div className="font-bold text-gray-900">
                {userData.academic.department}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500">Year</div>
              <div className="font-bold text-gray-900">
                {userData.academic.year}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">GPA</div>
              <div className="font-bold text-gray-900">
                {userData.academic.gpa}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Expected Graduation</div>
              <div className="font-bold text-gray-900">
                {userData.academic.graduation}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="space-y-4">
            {userData.skills.map((skill, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    skill.level === "Expert"
                      ? "bg-green-100 text-green-800"
                      : skill.level === "Advanced"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {userData.interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
