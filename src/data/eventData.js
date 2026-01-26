export const eventData = {
  id: 1,
  title: "Annual Tech Summit 2024: The Future of AI & Innovation",
  tagline:
    "Exploring the Frontiers of Artificial Intelligence and Technological Innovation",
  type: "Conference",
  status: "upcoming",

  // Main Info
  date: "December 15, 2024",
  time: "9:00 AM - 6:00 PM",
  duration: "Full Day",
  venue: {
    name: "University Convention Center",
    address: "123 Innovation Drive, Tech Park, Silicon Valley, CA 94000",
    building: "Main Auditorium",
    room: "Hall A",
    capacity: 500,
  },

  // Media
  coverImage:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=400&fit=crop",
  ],

  // Event Details
  description:
    "Join us for the most anticipated technology conference of the year, where industry leaders, innovators, and students come together to explore the latest advancements in artificial intelligence and emerging technologies.",

  detailedDescription: `
      The Annual Tech Summit 2024 brings together the brightest minds in technology to discuss and showcase groundbreaking innovations in artificial intelligence, machine learning, and emerging technologies. This year's theme focuses on "Ethical AI and Responsible Innovation."

      What to Expect:
      • Keynote speeches from industry pioneers
      • Hands-on workshops and technical sessions
      • AI product demonstrations and exhibitions
      • Networking opportunities with tech leaders
      • Startup pitch competitions
      • Career fair with top tech companies

      This event is designed for students, professionals, researchers, and anyone passionate about technology. Whether you're a beginner or an expert, you'll find valuable insights and connections at this premier technology gathering.
    `,

  // Event Highlights
  highlights: [
    "Live AI Product Demos",
    "Networking with Industry Leaders",
    "Hands-on Technical Workshops",
    "Startup Pitch Competition",
    "Career Fair with Top Companies",
    "Panel Discussions on Ethical AI",
  ],

  // Organizers
  organizers: [
    {
      id: 1,
      name: "Tech Innovators Society",
      avatar:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&crop=face",
      role: "Main Organizer",
      description: "Student-led technology community",
    },
    {
      id: 2,
      name: "Computer Science Department",
      avatar:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop&crop=face",
      role: "Academic Partner",
      description: "University CS Department",
    },
    {
      id: 3,
      name: "AI Research Center",
      avatar:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=200&h=200&fit=crop&crop=face",
      role: "Technical Partner",
      description: "University AI Research Division",
    },
  ],

  // Chief Guest & Speakers
  speakers: [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      role: "Chief Guest & Keynote Speaker",
      title: "Head of AI Research at TechCorp",
      bio: "Leading AI researcher with 15+ years of experience in machine learning and ethical AI development.",
      isChiefGuest: true,
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      role: "Guest Speaker",
      title: "CTO at InnovateAI",
      bio: "Technology leader specializing in AI applications for business transformation.",
      isChiefGuest: false,
      twitter: "https://twitter.com/mikerod",
      linkedin: "https://linkedin.com/in/mikerod",
    },
    {
      id: 3,
      name: "Dr. Alex Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      role: "Workshop Facilitator",
      title: "Professor of Computer Science",
      bio: "Expert in machine learning algorithms and their practical applications.",
      isChiefGuest: false,
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
  ],

  // Event Schedule
  schedule: [
    {
      time: "9:00 AM - 9:30 AM",
      title: "Registration & Welcome Coffee",
      description: "Check-in and networking session",
      location: "Main Lobby",
      speaker: null,
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Opening Keynote: The Future of AI",
      description: "Dr. Sarah Chen shares insights on AI's future impact",
      location: "Main Auditorium",
      speaker: "Dr. Sarah Chen",
    },
    {
      time: "10:45 AM - 12:00 PM",
      title: "Technical Workshop: ML Algorithms",
      description: "Hands-on session on machine learning implementation",
      location: "Workshop Room 1",
      speaker: "Dr. Alex Johnson",
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Networking Lunch",
      description: "Catered lunch and networking opportunity",
      location: "Convention Hall",
      speaker: null,
    },
    {
      time: "1:00 PM - 2:30 PM",
      title: "Panel Discussion: Ethical AI",
      description: "Experts discuss ethical considerations in AI development",
      location: "Main Auditorium",
      speaker: "Panel of Experts",
    },
    {
      time: "2:45 PM - 4:00 PM",
      title: "Startup Pitch Competition",
      description: "Emerging startups present their AI solutions",
      location: "Innovation Theater",
      speaker: "Various Startups",
    },
    {
      time: "4:15 PM - 5:30 PM",
      title: "AI Product Exhibition",
      description: "Showcase of latest AI products and technologies",
      location: "Exhibition Hall",
      speaker: null,
    },
    {
      time: "5:30 PM - 6:00 PM",
      title: "Closing Ceremony & Awards",
      description: "Prize distribution and closing remarks",
      location: "Main Auditorium",
      speaker: "Organizing Committee",
    },
  ],

  // Registration Info
  registration: {
    deadline: "December 13, 2024",
    fee: 49,
    isFree: false,
    registered: 245,
    capacity: 500,
    requirements: [
      "Must be 18+ years old",
      "Basic understanding of technology preferred",
      "Valid student ID for student discount",
    ],
  },

  // Contact Information
  contact: {
    email: "techsummit2024@university.edu",
    phone: "+1 (555) 123-4567",
    website: "https://techsummit2024.university.edu",
    social: {
      twitter: "https://twitter.com/techsummit2024",
      instagram: "https://instagram.com/techsummit2024",
      linkedin: "https://linkedin.com/company/techsummit2024",
      youtube: "https://youtube.com/techsummit2024",
    },
  },

  // What Happened (For past events)
  eventReport: `
      The Annual Tech Summit 2023 was a tremendous success with over 400 attendees from across the country. 
      Key achievements:
      • 15+ industry leaders shared insights
      • 8 hands-on workshops conducted
      • 25 startups showcased innovations
      • 150+ job interviews conducted
      • $50,000 in prizes awarded to winners
      
      The event received overwhelmingly positive feedback with 95% satisfaction rate.
    `,

  // Awards & Prizes
  awards: [
    { name: "Best Startup", value: "$25,000" },
    { name: "Innovation Award", value: "$15,000" },
    { name: "Best Technical Implementation", value: "$10,000" },
  ],
};

export const eventList = [
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
];
