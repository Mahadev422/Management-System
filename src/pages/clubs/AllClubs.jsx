import { useState } from "react";
import { FaUsers, FaSearch, FaFilter, FaPlus } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import ClubCard from "../../components/club/ClubCard";
import { clubsList } from "../../data/club";

// Clubs Page Component
const AllClubs = () => {
  const [clubs, setClubs] = useState([...clubsList]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("members");

  const categories = [
    "All",
    "Technology",
    "Sports",
    "Arts",
    "Science",
    "Music",
    "Photography",
    "Literature",
    "Gaming",
    "Film",
    "Environment",
  ];

  const handleJoinClub = (clubId, joinStatus) => {
    setClubs(
      clubs.map((club) =>
        club.id === clubId ? { ...club, isJoined: joinStatus } : club,
      ),
    );
  };

  const handleCreateClub = () => {
    const newClub = {
      id: clubs.length + 1,
      name: "New Club Proposal",
      category: "General",
      categoryColor: "text-gray-600",
      iconBgColor: "bg-gray-100",
      description: "Describe your club's purpose and activities here.",
      creationDate: "Today",
      members: 1,
      rating: 0,
      isPopular: false,
      isJoined: true,
      isFavorite: false,
      isAdmin: true,
      recentActivity: "Club creation pending approval",
      meetingSchedule: "To be decided",
    };
    setClubs([newClub, ...clubs]);
  };

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || club.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedClubs = [...filteredClubs].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "date":
        return new Date(b.creationDate) - new Date(a.creationDate);
      case "rating":
        return b.rating - a.rating;
      case "members":
      default:
        return b.members - a.members;
    }
  });

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Control Bar */}
      <section className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search clubs by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="flex justify-between gap-2">
              <div className="relative">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              <button
                onClick={handleCreateClub}
                className="flex items-center space-x-2 p-3 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <FaPlus className="w-5 h-5" />
                <span>Request Club</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filterCategory === "All" ? "All Clubs" : filterCategory}
              <span className="text-gray-500 text-lg ml-2">
                ({filteredClubs.length})
              </span>
            </h2>
          </div>

          {filteredClubs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <HiOutlineUserGroup className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No clubs found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterCategory("All");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedClubs.map((club) => (
                <ClubCard key={club.id} club={club} onJoin={handleJoinClub} />
              ))}
            </div>
          )}
        </div>

        {/* Empty State Suggestion */}
        <div className="bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white text-center">
          <FaUsers className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="mb-6 opacity-90">
            Start your own club and build your community!
          </p>
          <button
            onClick={handleCreateClub}
            className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors"
          >
            Request For Club
          </button>
        </div>
      </section>
    </div>
  );
};

export default AllClubs;
