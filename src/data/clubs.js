import { FaPaintBrush, FaMusic, FaBasketballBall, FaLeaf, FaGraduationCap, FaCamera, FaUtensils, FaGlobe } from "react-icons/fa";

export const clubData = {
  id: 1,
  name: "Tech Innovators Society",
  // ... existing tech club data remains the same
};

export const artsClubData = {
  id: 2,
  name: "Creative Arts Alliance",
  tagline: "Where Imagination Meets Expression",
  category: "Arts & Culture",
  logo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=400&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200&h=400&fit=crop",
  description: "A vibrant community of artists, designers, and creatives exploring various forms of artistic expression. We host weekly drawing sessions, photography walks, poetry slams, and collaborate on campus art installations.",
  
  details: {
    founded: "March 10, 2020",
    meetingSchedule: "Every Friday, 5:00 PM - 8:00 PM",
    meetingLocation: "Arts Center, Studio B",
    website: "https://creativearts.example.com",
    email: "hello@creativearts.example.com",
    phone: "+1 (555) 234-5678",
  },

  coordinators: [
    {
      id: 1,
      name: "Maya Rodriguez",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      email: "maya.r@example.com",
      phone: "+1 (555) 234-5679",
      isOnline: true,
      joinDate: "Mar 2020",
      contribution: "Organized 20+ exhibitions",
    },
    {
      id: 2,
      name: "David Park",
      role: "Gallery Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      email: "david.p@example.com",
      phone: "+1 (555) 234-5680",
      isOnline: false,
      joinDate: "Aug 2021",
      contribution: "Curated 12 shows",
    }
  ],

  members: [
    {
      id: 1,
      name: "Lisa Wang",
      role: "Painter",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      isOnline: true,
      joinDate: "Jan 2023",
      contribution: "Mural Project Lead",
      isCoordinator: false,
    },
    {
      id: 2,
      name: "Carlos Silva",
      role: "Photographer",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
      isOnline: true,
      joinDate: "Sep 2022",
      contribution: "Photo Club Lead",
      isCoordinator: false,
    },
  ],

  upcomingEvents: [
    {
      id: 1,
      title: "Autumn Art Exhibition",
      description: "Showcasing student artwork with guest judges from local galleries",
      date: "Nov 30, 2023",
      time: "6:00 PM - 9:00 PM",
      location: "Campus Gallery",
      type: "Exhibition",
      status: "Upcoming",
      participants: 200,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Life Drawing Session",
      description: "Weekly figure drawing with professional models",
      date: "Dec 1, 2023",
      time: "5:00 PM - 8:00 PM",
      location: "Studio B",
      type: "Workshop",
      status: "Upcoming",
      participants: 25,
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=200&fit=crop",
    },
  ],

  pastEvents: [
    {
      id: 3,
      title: "Street Art Festival",
      description: "Campus-wide mural painting collaboration",
      date: "Sep 15, 2023",
      location: "Main Quad",
      type: "Festival",
      participants: 150,
      image: "https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=400&h=200&fit=crop",
    },
  ],

  achievements: [
    {
      title: "Best Arts Club 2023",
      year: "2023"
    },
    {
      title: "City Arts Council Grant",
      year: "2022"
    },
    {
      title: "National Student Art Competition Finalists",
      year: "2023"
    },
  ],

  socialMedia: {
    instagram: "https://instagram.com/creativeartsalliance",
    twitter: "https://twitter.com/creativearts",
    facebook: "https://facebook.com/creativeartsalliance",
    pinterest: "https://pinterest.com/creativearts",
  },

  requirements: [
    "Open to all skill levels",
    "Bring your own materials",
    "Respectful critique environment",
    "Active participation encouraged",
  ],
};

export const sportsClubData = {
  id: 3,
  name: "Campus United FC",
  tagline: "Uniting Through Sport, Excellence Through Training",
  category: "Sports",
  logo: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=400&h=400&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1200&h=400&fit=crop",
  description: "Competitive and recreational soccer club for students of all skill levels. We compete in inter-collegiate tournaments while promoting fitness, teamwork, and sportsmanship.",
  
  details: {
    founded: "August 5, 2019",
    meetingSchedule: "Mon/Wed/Fri, 7:00 AM & 5:00 PM",
    meetingLocation: "University Stadium Field 2",
    website: "https://campusunitedfc.example.com",
    email: "info@campusunitedfc.example.com",
    phone: "+1 (555) 345-6789",
  },

  coordinators: [
    {
      id: 1,
      name: "Marcus Lee",
      role: "Team Captain",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face",
      email: "marcus.l@example.com",
      phone: "+1 (555) 345-6790",
      isOnline: false,
      joinDate: "Aug 2019",
      contribution: "Lead scorer 2 seasons",
    },
    {
      id: 2,
      name: "Sophia Williams",
      role: "Vice Captain",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      email: "sophia.w@example.com",
      phone: "+1 (555) 345-6791",
      isOnline: true,
      joinDate: "Jan 2021",
      contribution: "Defensive coordinator",
    }
  ],

  members: [
    {
      id: 1,
      name: "James Wilson",
      role: "Goalkeeper",
      avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&h=200&fit=crop&crop=face",
      isOnline: false,
      joinDate: "Mar 2023",
      contribution: "5 clean sheets",
      isCoordinator: false,
    },
    {
      id: 2,
      name: "Olivia Chen",
      role: "Midfielder",
      avatar: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=200&h=200&fit=crop&crop=face",
      isOnline: true,
      joinDate: "Feb 2023",
      contribution: "Team fitness coach",
      isCoordinator: false,
    },
  ],

  upcomingEvents: [
    {
      id: 1,
      title: "Championship Final",
      description: "University League Championship match against City College",
      date: "Dec 2, 2023",
      time: "3:00 PM",
      location: "University Stadium",
      type: "Match",
      status: "Upcoming",
      participants: 22,
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Community Youth Clinic",
      description: "Free soccer coaching for local youth",
      date: "Dec 5, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Community Park",
      type: "Clinic",
      status: "Coming Soon",
      participants: 50,
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=200&fit=crop",
    },
  ],

  pastEvents: [
    {
      id: 3,
      title: "Alumni Match 2023",
      description: "Annual friendly match against alumni team",
      date: "Oct 28, 2023",
      location: "University Stadium",
      type: "Match",
      participants: 44,
      image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=200&fit=crop",
    },
  ],

  achievements: [
    {
      title: "University League Champions 2023",
      year: "2023"
    },
    {
      title: "Sportsmanship Award 2022",
      year: "2022"
    },
    {
      title: "Regional Tournament Finalists",
      year: "2023"
    },
  ],

  socialMedia: {
    instagram: "https://instagram.com/campusunitedfc",
    twitter: "https://twitter.com/campusunitedfc",
    facebook: "https://facebook.com/campusunitedfc",
    youtube: "https://youtube.com/campusunitedfc",
  },

  requirements: [
    "Medical clearance required",
    "Regular attendance mandatory",
    "Team jersey purchase ($45)",
    "Minimum 2 training sessions/week",
  ],
};

export const environmentalClubData = {
  id: 4,
  name: "Green Warriors",
  tagline: "Protecting Our Planet, One Action at a Time",
  category: "Environment",
  logo: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=400&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=400&fit=crop",
  description: "Dedicated to environmental conservation, sustainability, and raising awareness about climate change. We organize clean-ups, tree planting, and advocate for green policies on campus.",
  
  details: {
    founded: "April 22, 2021 (Earth Day)",
    meetingSchedule: "Every Tuesday, 4:00 PM - 6:00 PM",
    meetingLocation: "Environmental Science Building, Room 105",
    website: "https://greenwarriors.example.com",
    email: "earth@greenwarriors.example.com",
    phone: "+1 (555) 456-7890",
  },

  coordinators: [
    {
      id: 1,
      name: "Ethan Green",
      role: "President",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      email: "ethan.g@example.com",
      phone: "+1 (555) 456-7891",
      isOnline: true,
      joinDate: "Apr 2021",
      contribution: "Organized 30+ cleanups",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Sustainability Officer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
      email: "priya.s@example.com",
      phone: "+1 (555) 456-7892",
      isOnline: true,
      joinDate: "Sep 2021",
      contribution: "Reduced campus waste by 40%",
    }
  ],

  members: [
    {
      id: 1,
      name: "Liam Chen",
      role: "Garden Coordinator",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop&crop=face",
      isOnline: false,
      joinDate: "Mar 2023",
      contribution: "Maintains community garden",
      isCoordinator: false,
    },
    {
      id: 2,
      name: "Aisha Mohammed",
      role: "Education Lead",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
      isOnline: true,
      joinDate: "Jan 2023",
      contribution: "Leads workshops",
      isCoordinator: false,
    },
  ],

  upcomingEvents: [
    {
      id: 1,
      title: "Campus Clean-Up Day",
      description: "Join us to clean up campus and surrounding neighborhoods",
      date: "Nov 28, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Meet at Main Quad",
      type: "Volunteer",
      status: "Upcoming",
      participants: 100,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Sustainable Living Workshop",
      description: "Learn practical tips for reducing your carbon footprint",
      date: "Dec 4, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Sustainability Center",
      type: "Workshop",
      status: "Coming Soon",
      participants: 60,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop",
    },
  ],

  pastEvents: [
    {
      id: 3,
      title: "Tree Planting Initiative",
      description: "Planted 500 trees in campus green spaces",
      date: "Oct 14, 2023",
      location: "Campus Arboretum",
      type: "Volunteer",
      participants: 80,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=200&fit=crop",
    },
  ],

  achievements: [
    {
      title: "Green Campus Award 2023",
      year: "2023"
    },
    {
      title: "Zero Waste Certification",
      year: "2023"
    },
    {
      title: "Community Service Award",
      year: "2022"
    },
  ],

  socialMedia: {
    instagram: "https://instagram.com/greenwarriors",
    twitter: "https://twitter.com/greenwarriors",
    facebook: "https://facebook.com/greenwarriors",
    tiktok: "https://tiktok.com/@greenwarriors",
  },

  requirements: [
    "Passion for environment",
    "No experience needed",
    "Commitment to attend events",
    "Positive attitude",
  ],
};

export const allClubsData = [
  clubData,
  artsClubData,
  sportsClubData,
  environmentalClubData,
];

export const clubCategories = [
  { id: 1, name: "Technology", icon: "💻", count: 12 },
  { id: 2, name: "Arts & Culture", icon: "🎨", count: 8 },
  { id: 3, name: "Sports", icon: "⚽", count: 15 },
  { id: 4, name: "Environment", icon: "🌱", count: 6 },
  { id: 5, name: "Academic", icon: "📚", count: 10 },
  { id: 6, name: "Social", icon: "👥", count: 7 },
  { id: 7, name: "Volunteer", icon: "🤝", count: 9 },
  { id: 8, name: "Cultural", icon: "🌍", count: 5 },
];

export const featuredClubs = [
  {
    id: 1,
    name: "Tech Innovators Society",
    category: "Technology",
    members: 250,
    rating: 4.9,
    logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Creative Arts Alliance",
    category: "Arts & Culture",
    members: 180,
    rating: 4.8,
    logo: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Campus United FC",
    category: "Sports",
    members: 65,
    rating: 4.7,
    logo: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Green Warriors",
    category: "Environment",
    members: 120,
    rating: 4.9,
    logo: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=200&h=200&fit=crop&crop=face",
  },
];