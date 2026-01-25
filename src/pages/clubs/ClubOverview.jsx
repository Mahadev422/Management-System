import { FaEnvelope, FaPhone } from "react-icons/fa";
import { clubData } from "../../data/clubData";
const ClubOverview = () => {
  return (
    <div className="space-y-8">
      {/* Club Description */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About the Club
        </h2>
        <p className="text-gray-700 mb-6">{clubData.longDescription}</p>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clubData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-xl flex items-center space-x-3"
              >
                {<achievement.icon className="w-6 h-6 text-yellow-600" />}
                <div>
                  <div className="font-semibold text-gray-900">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {achievement.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coordinators Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Club Coordinators
          </h2>
          <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-semibold">
            {clubData.coordinators.length} Coordinators
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clubData.coordinators.map((coordinator) => (
            <div
              key={coordinator.id}
              className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={coordinator.avatar}
                  alt={coordinator.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {coordinator.name}
                  </h4>
                  <p className="text-blue-600 font-semibold">
                    {coordinator.role}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div
                      className={`w-2 h-2 rounded-full ${coordinator.isOnline ? "bg-green-500" : "bg-gray-400"}`}
                    ></div>
                    <span className="text-sm text-gray-500">
                      {coordinator.isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaEnvelope className="w-4 h-4" />
                  <span className="text-sm">{coordinator.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaPhone className="w-4 h-4" />
                  <span className="text-sm">{coordinator.phone}</span>
                </div>
                <div className="pt-4">
                  <button className="w-full py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubOverview;
