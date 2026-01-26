import { useState } from "react";
import {
  FaCalendarAlt,
  FaCalendarDay,
  FaCalendarCheck,
  FaCalendarTimes,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi";

import EventCard from "../../components/event/EventCard"
import { eventList } from "../../data/eventData";
import EventHeroSection from "../../components/event/EventHeroSection";

// Events Page Component
const AllEvent = () => {
  const [events, setEvents] = useState([...eventList]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const eventTypes = [
    "all",
    "Conference",
    "Workshop",
    "Concert",
    "Sports",
    "Networking",
    "Art",
    "Hackathon",
    "Seminar",
    "Webinar",
    "Gaming",
  ];
  const statusOptions = [
    {
      value: "all",
      label: "All Events",
      icon: FaCalendarAlt,
      count: events.length,
    },
    {
      value: "upcoming",
      label: "Upcoming",
      icon: FaCalendarDay,
      count: events.filter((e) => e.status === "upcoming").length,
    },
    {
      value: "ongoing",
      label: "Current",
      icon: FaCalendarCheck,
      count: events.filter((e) => e.status === "ongoing").length,
    },
    {
      value: "past",
      label: "Past",
      icon: FaCalendarTimes,
      count: events.filter((e) => e.status === "past").length,
    },
  ];

  // Filter and sort events
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" || event.status === filterStatus;
    const matchesType = filterType === "all" || event.type === filterType;
    return matchesSearch && matchesStatus && matchesType;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "popularity":
        return b.registered - a.registered;
      case "rating":
        return b.rating - a.rating;
      case "date":
      default:
        // Custom date comparison for different date formats
        return (
          new Date(a.date.includes("Today") ? new Date() : a.date) -
          new Date(b.date.includes("Today") ? new Date() : b.date)
        );
    }
  });

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      {/* <EventHeroSection /> */}

      {/* Main Content */}
      <section className="container mx-auto px-6 py-8">
        {/* Control Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Status Filter */}
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} ({option.count})
                    </option>
                  ))}
                </select>
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Type Filter */}
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </option>
                  ))}
                </select>
                <HiOutlineTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filterStatus === "all"
                  ? "All Events"
                  : filterStatus === "upcoming"
                    ? "Upcoming Events"
                    : filterStatus === "ongoing"
                      ? "Current Events"
                      : "Past Events"}
                <span className="text-gray-500 text-lg ml-2">
                  ({filteredEvents.length})
                </span>
              </h2>
              {filterType !== "all" && (
                <p className="text-gray-600 mt-1">
                  Filtered by:{" "}
                  <span className="font-semibold text-blue-600">
                    {filterType}
                  </span>
                </p>
              )}
            </div>
            <div className="text-gray-600">
              Showing {Math.min(8, filteredEvents.length)} of{" "}
              {filteredEvents.length} events
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
              <FaCalendarTimes className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No events found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterStatus("all");
                  setFilterType("all");
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>
          )}
        </div>
        
      </section>
    </div>
  );
};

export default AllEvent;
