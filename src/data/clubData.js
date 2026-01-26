import { FaCertificate, FaMedal, FaTrophy } from "react-icons/fa";

export const clubData = {
  id: 1,
  name: "Tech Innovators Society",
  tagline: "Building the Future, One Innovation at a Time",
  category: "Technology",
  logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop&crop=face",
  coverImage:
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h-400&fit=crop",
  description:
    "Founded in 2022, Tech Innovators Society has grown to become one of the largest and most active tech communities on campus. We organize weekly workshops, monthly hackathons, and annual tech festivals that attract participants from across the region. Our members have won national level competitions and secured internships at top tech companies.",

  // Club Details
  details: {
    founded: "January 15, 2022",
    meetingSchedule: "Every Wednesday, 6:00 PM - 8:00 PM",
    meetingLocation: "Tech Building, Room 302",
    website: "https://techinnovators.example.com",
    email: "contact@techinnovators.example.com",
    phone: "+1 (555) 123-4567",
  },

  // Coordinators
  coordinators: [
    {
      id: 1,
      name: "Alex Johnson",
      role: "President",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      email: "alex.j@example.com",
      phone: "+1 (555) 123-4568",
      isOnline: true,
      joinDate: "Jan 2022",
      contribution: "Lead 15+ events",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Vice President",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      email: "sarah.c@example.com",
      phone: "+1 (555) 123-4569",
      isOnline: false,
      joinDate: "Feb 2022",
      contribution: "Managed 8 projects",
    }
  ],

  // Club Members (sample)
  members: [
    {
      id: 1,
      name: "John Doe",
      role: "Web Developer",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      isOnline: true,
      joinDate: "Apr 2023",
      contribution: "Active Contributor",
      isCoordinator: false,
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "AI Researcher",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      isOnline: true,
      joinDate: "May 2023",
      contribution: "Project Lead",
      isCoordinator: false,
    },
    // Add more members as needed
  ],

  // Upcoming Events
  upcomingEvents: [
    {
      id: 1,
      title: "AI & ML Workshop",
      description:
        "Hands-on workshop on machine learning algorithms and AI applications",
      date: "Nov 25, 2023",
      time: "4:00 PM - 7:00 PM",
      location: "Tech Building Auditorium",
      type: "Workshop",
      status: "Upcoming",
      participants: 85,
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Annual Hackathon 2023",
      description:
        "48-hour coding marathon with exciting prizes and mentorship",
      date: "Dec 1-3, 2023",
      time: "6:00 PM",
      location: "Innovation Center",
      type: "Hackathon",
      status: "Coming Soon",
      participants: 150,
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400&h=200&fit=crop",
    },
  ],

  // Past Events
  pastEvents: [
    {
      id: 3,
      title: "Web Dev Bootcamp",
      description: "Intensive web development training for beginners",
      date: "Oct 15, 2023",
      location: "Computer Lab 4",
      type: "Training",
      participants: 120,
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=200&fit=crop",
    },
  ],

  // Achievements
  achievements: [
    {
      title: "Best Tech Club 2023",
      year: "2023"
    },
    {
      title: "National Hackathon Winners",
      year: "2022"
    },
    {
      title: "Google Developer Grant",
      year: "2023"
    },
  ],

  socialMedia: {
    instagram: "https://instagram.com/techinnovators",
    twitter: "https://twitter.com/techinnovators",
    linkedin: "https://linkedin.com/company/techinnovators",
    youtube: "https://youtube.com/techinnovators",
  },

  requirements: [
    "Must be a registered student",
    "Basic programming knowledge preferred",
    "Willingness to learn and collaborate",
    "Commitment to attend meetings",
  ],
};
