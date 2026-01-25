import { FaEnvelope, FaStar } from "react-icons/fa";

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
          />
          {member.isOnline && (
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              {member.isCoordinator && (
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded mt-1">
                  Coordinator
                </span>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Joined</div>
              <div className="text-sm font-medium">{member.joinDate}</div>
            </div>
          </div>
          <div className="mt-3 flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700">
              <FaEnvelope className="w-4 h-4" />
              <span>Message</span>
            </button>
            <div className="flex items-center space-x-1 text-gray-500">
              <FaStar className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">{member.contribution}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;