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

import EventCard from "../../components/event/EventCard";

// Events Page Component
const EventLayout = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Annual Tech Summit 2024",
      description:
        "Join us for the biggest technology conference of the year featuring industry leaders, workshops, and networking opportunities.",
      type: "Conference",
      typeColor: "text-blue-600",
      iconBgColor: "bg-blue-100",
      status: "upcoming",
      date: "Dec 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "University Convention Center",
      duration: "Full Day",
      registered: 245,
      capacity: 500,
      rating: 4.8,
      isFree: false,
      price: 49,
      isFavorite: true,
      isRegistered: false,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Tech Club",
          avatar:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop",
        },
        {
          name: "Computer Science Dept",
          avatar:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      description:
        "Hands-on workshop covering the fundamentals of AI and ML with practical implementations.",
      type: "Workshop",
      typeColor: "text-green-600",
      iconBgColor: "bg-green-100",
      status: "ongoing",
      date: "Today",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 302",
      duration: "3 Hours",
      registered: 42,
      capacity: 50,
      rating: 4.9,
      isFree: true,
      isFavorite: false,
      isRegistered: true,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "AI Research Group",
          avatar:
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 3,
      title: "Campus Music Festival",
      description:
        "Annual music festival featuring student bands, solo performers, and guest artists.",
      type: "Concert",
      typeColor: "text-purple-600",
      iconBgColor: "bg-purple-100",
      status: "upcoming",
      date: "Nov 30, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "University Amphitheater",
      duration: "4 Hours",
      registered: 320,
      capacity: 1000,
      rating: 4.7,
      isFree: true,
      isFavorite: false,
      isRegistered: false,
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Music Society",
          avatar:
            "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop",
        },
        {
          name: "Cultural Committee",
          avatar:
            "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 4,
      title: "Annual Sports Tournament",
      description:
        "Inter-department sports competition featuring basketball, football, and volleyball.",
      type: "Sports",
      typeColor: "text-red-600",
      iconBgColor: "bg-red-100",
      status: "upcoming",
      date: "Dec 5-7, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "University Sports Complex",
      duration: "3 Days",
      registered: 156,
      capacity: 300,
      rating: 4.6,
      isFree: true,
      isFavorite: false,
      isRegistered: false,
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Sports Club",
          avatar:
            "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop",
        },
        {
          name: "Athletics Dept",
          avatar:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 5,
      title: "Startup Pitch Competition",
      description:
        "Present your startup ideas to industry experts and win funding for your venture.",
      type: "Networking",
      typeColor: "text-yellow-600",
      iconBgColor: "bg-yellow-100",
      status: "past",
      date: "Nov 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Business School Auditorium",
      duration: "6 Hours",
      registered: 65,
      capacity: 100,
      rating: 4.5,
      isFree: false,
      price: 25,
      isFavorite: true,
      isRegistered: true,
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Entrepreneurship Cell",
          avatar:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      description:
        "Intensive 2-day bootcamp covering modern web development technologies and best practices.",
      type: "Workshop",
      typeColor: "text-indigo-600",
      iconBgColor: "bg-indigo-100",
      status: "past",
      date: "Nov 5-6, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Hub Building",
      duration: "2 Days",
      registered: 85,
      capacity: 100,
      rating: 4.8,
      isFree: false,
      price: 75,
      isFavorite: false,
      isRegistered: false,
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Web Dev Club",
          avatar:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop",
        },
        {
          name: "CS Department",
          avatar:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 7,
      title: "Art Exhibition: Modern Perspectives",
      description:
        "Showcase of student artwork featuring paintings, sculptures, and digital art.",
      type: "Art",
      typeColor: "text-pink-600",
      iconBgColor: "bg-pink-100",
      status: "ongoing",
      date: "This Week",
      time: "11:00 AM - 7:00 PM",
      location: "Art Gallery",
      duration: "Week Long",
      registered: 189,
      capacity: 500,
      rating: 4.7,
      isFree: true,
      isFavorite: false,
      isRegistered: false,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Fine Arts Club",
          avatar:
            "https://images.unsplash.com/photo-1544919982-b61976a0d7ed?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: 8,
      title: "Career Fair 2024",
      description:
        "Connect with top companies and explore internship and job opportunities.",
      type: "Networking",
      typeColor: "text-teal-600",
      iconBgColor: "bg-teal-100",
      status: "upcoming",
      date: "Jan 20, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus Ground",
      duration: "6 Hours",
      registered: 450,
      capacity: 1000,
      rating: 4.9,
      isFree: true,
      isFavorite: false,
      isRegistered: true,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Placement Cell",
          avatar:
            "https://images.unsplash.com/photo-1551836026-d5c2c0b0b8a8?w=100&h=100&fit=crop",
        },
        {
          name: "Alumni Association",
          avatar:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
        },
      ],
    },
  ]);

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

  const handleRegisterEvent = (eventId, registerStatus) => {
    setEvents(
      events.map((event) =>
        event.id === eventId
          ? { ...event, isRegistered: registerStatus }
          : event,
      ),
    );
  };

  const handleFavoriteEvent = (eventId, favoriteStatus) => {
    setEvents(
      events.map((event) =>
        event.id === eventId ? { ...event, isFavorite: favoriteStatus } : event,
      ),
    );
  };

  const handleCreateEvent = () => {
    const newEvent = {
      id: events.length + 1,
      title: "New Event Proposal",
      description: "Describe your event here...",
      type: "Workshop",
      typeColor: "text-gray-600",
      iconBgColor: "bg-gray-100",
      status: "upcoming",
      date: "TBD",
      time: "TBD",
      location: "To be decided",
      duration: "TBD",
      registered: 0,
      capacity: 50,
      rating: 0,
      isFree: true,
      isFavorite: false,
      isRegistered: false,
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
      organizers: [
        {
          name: "Your Name",
          avatar:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        },
      ],
    };
    setEvents([newEvent, ...events]);
  };

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

  const stats = {
    totalEvents: events.length,
    upcomingEvents: events.filter((e) => e.status === "upcoming").length,
    ongoingEvents: events.filter((e) => e.status === "ongoing").length,
    registeredEvents: events.filter((e) => e.isRegistered).length,
    totalRegistrations: events.reduce(
      (sum, event) => sum + event.registered,
      0,
    ),
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      {/* <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Amazing
                <span className="block text-yellow-300">Campus Events</span>
              </h1>
              <p className="text-xl opacity-90 mb-8">
                From workshops to concerts, find events that match your
                interests and connect with the campus community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCreateEvent}
                  className="px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPlus className="w-5 h-5" />
                  <span>Create Event</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                  onRegister={handleRegisterEvent}
                  onFavorite={handleFavoriteEvent}
                />
              ))}
            </div>
          )}
        </div>
        
      </section>
    </div>
  );
};

export default EventLayout;
