import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import ClubCard from "../../components/club/ClubCard";
import { useClub } from "../../store/useClub";
import ClubNotFound from "../../components/club/ClubNotFound";
import ClubControl from "../../components/club/ClubControl";

const AllClubs = () => {
  const { getAllClubs } = useClub();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    if(clubs.length === 0) {
      const d = getAllClubs();
      setClubs([...d]);
    }
    setLoading(false);
  },[clubs]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredClubs = [...clubs].filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || club.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedClubs = [...filteredClubs].sort((a, b) => b.members - a.members);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Control Bar */}
      <section className="container mx-auto px-6 py-8">
        <ClubControl searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilterCategory={setFilterCategory} filterCategory={filterCategory} />

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

          {(loading) ? <p>Loading...</p> : filteredClubs.length === 0 ? (
            <ClubNotFound setFilterCategory={setFilterCategory} setSearchTerm={setSearchTerm} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedClubs.map((club) => (
                <ClubCard key={club.id} club={club} />
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
