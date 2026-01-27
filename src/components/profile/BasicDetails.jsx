import React from "react";
import { FaCamera, FaEdit, FaGraduationCap, FaShareAlt } from "react-icons/fa";
import { HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";
import { userData } from "../../data/profile";

const BasicDetails = () => {
  return (
    <div className="relative">
      {/* Cover Photo */}
      <div className="h-64 md:h-80 overflow-hidden">
        <img
          src={userData.coverPhoto}
          alt="Profile Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Profile Info Overlay */}
      <div className="container mx-auto px-6 relative -mt-24">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Profile Picture and Basic Info */}
            <div className="flex items-start space-x-6">
              <div className="relative -mt-32 md:-mt-36">
                <img
                  src={userData.avatar}
                  alt={userData.name}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-8 border-white shadow-2xl"
                />
                <button className="absolute -bottom-3 -right-3 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg">
                  <FaCamera className="w-5 h-5" />
                </button>
              </div>

              <div className="pt-4">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {userData.name}
                  </h1>
                  <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full font-semibold">
                    {userData.academic.year}
                  </span>
                </div>
                <p className="text-xl text-gray-600 mb-4">{userData.title}</p>
                <p className="text-gray-700 mb-6 max-w-2xl">{userData.bio}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center space-x-2 text-gray-600">
                    <HiOutlineLocationMarker className="w-5 h-5" />
                    <span>{userData.contact.location}</span>
                  </span>
                  <span className="flex items-center space-x-2 text-gray-600">
                    <HiOutlineAcademicCap className="w-5 h-5" />
                    <span>{userData.academic.university}</span>
                  </span>
                  <span className="flex items-center space-x-2 text-gray-600">
                    <FaGraduationCap className="w-5 h-5" />
                    <span>Class of {userData.academic.graduation}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                <FaEdit className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow">
                <FaShareAlt className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
