const JoinedClubCard = ({ club }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg ${club.categoryColor}`}>
            <img src={club.logo} alt={club.name} className="w-12 h-12 rounded-lg object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{club.name}</h4>
            <p className="text-gray-600 text-sm">{club.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${club.membershipColor}`}>
            {club.membershipType}
          </span>
          {club.isAdmin && (
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded">
              Admin
            </span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Joined</div>
          <div className="font-semibold">{club.joinedDate}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Role</div>
          <div className="font-semibold">{club.role}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Events</div>
          <div className="font-semibold">{club.eventsAttended}</div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button className="flex-1 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors">
          View Club
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-red-300 hover:text-red-600 transition-colors">
          Leave
        </button>
      </div>
    </div>
  );
};

export default JoinedClubCard;