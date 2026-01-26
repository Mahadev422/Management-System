import ClubAchievement from "../../components/club/ClubAchievement";
import ClubLoader from '../../components/loaders/ClubLoader'
import { useClub } from "../../store/useClub";

const ClubOverview = () => {
  const { clubData } = useClub();

  if(Object.keys(clubData).length == 0) return <ClubLoader />

  return (
    <div className="space-y-8">
      {/* Club Description */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About the Club
        </h2>
        <p className="text-gray-700 mb-6">{clubData.description}</p>

        {/* Achievements */}
        <ClubAchievement />
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
                    
                  </div>
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
