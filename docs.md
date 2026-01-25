# **Project Name: Campus Connect - Club & Event Management System**

## **1. Project Overview**

A centralized platform for managing student clubs, committees, events, and resource bookings within an educational institution. It serves students, faculty organizers, and administrators with role-based access.

---

## **2. Target Users & Roles**

| Role                      | Key Permissions                                                         |
| ------------------------- | ----------------------------------------------------------------------- |
| **Student Member**        | View events, join clubs, book resources (if allowed)                    |
| **Club Member**           | Create draft events, view internal club details                         |
| **Club Head/Coordinator** | Manage club members, submit events for approval, manage club profile    |
| **Faculty Advisor**       | Approve/reject events, moderate club activities                         |
| **Admin**                 | Full system control, manage users, approve resources, oversee analytics |
| **Resource Manager**      | Manage inventory, approve/reject bookings                               |

---

## **3. System Architecture**

### **Backend Structure**

```
campus-connect-backend/
├── src/
│   ├── controllers/         # Route handlers
│   ├── models/              # Database models
│   ├── routes/              # Express routes
│   ├── middleware/          # Auth, validation, etc.
│   ├── services/            # Business logic
│   ├── utils/               # Helpers, constants
│   └── config/              # DB, auth config
├── tests/
└── package.json
```

### **Frontend Structure**

```
campus-connect-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── common/          # Buttons, modals, cards
│   │   ├── layout/          # Header, sidebar, footer
│   │   ├── profile/         # Profile related
│   │   ├── events/          # Event components
│   │   ├── clubs/           # Club components
│   │   ├── resources/       # Booking components
│   │   └── dashboard/       # Analytics components
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Events.jsx
│   │   ├── Clubs.jsx
│   │   ├── Resources.jsx
│   │   └── Profile.jsx
│   ├── hooks/               # Custom React hooks
│   ├── context/             # Auth, theme context
│   ├── utils/               # API calls, formatters
│   ├── styles/              # Global CSS, themes
│   └── App.jsx
└── package.json
```

---

## **4. Database Schema (MongoDB/PostgreSQL)**

### **Core Collections/Tables:**

1. **Users**
   - \_id, name, email, password_hash, role, department, year, avatar_url
   - club_memberships[], clubs_heading[]

2. **Clubs**
   - \_id, name, description, logo_url, visibility (public/private)
   - members[], heads[], faculty_advisor_id
   - created_at, updated_at

3. **Events**
   - \_id, title, description, type (single/multi-day)
   - start_date, end_date, location
   - organizing_clubs[], status (draft/pending/approved/rejected/completed)
   - budget, approved_budget, budget_status
   - created_by, approved_by, approved_at

4. **Resources**
   - \_id, name, type (room/equipment), capacity
   - location, specifications, availability_schedule
   - booking_policy (auto/approval_required)

5. **Bookings**
   - \_id, resource_id, user_id, purpose
   - start_time, end_time, status (pending/approved/rejected/completed)
   - created_at, approved_by

6. **AuditLogs**
   - \_id, user_id, action, entity_type, entity_id, timestamp

---

## **5. Wireframe Overview**

### **Page 1: Dashboard**

- **Top Navigation Bar**: User profile, notifications, role switcher
- **Sidebar**: Main menu (Dashboard, Events, Clubs, Resources, Analytics)
- **Main Content**:
  - Upcoming events (cards with status indicators)
  - Quick stats (events pending, bookings today, club members)
  - Recent activities feed
  - Admin-only: Pending approvals widget

### **Page 2: User Profile**

- **Left Panel**: Profile picture, basic info, edit button
- **Right Panel**:
  - **Tab 1: Details** - Department, year, bio
  - **Tab 2: Clubs** - Grid of club cards (member/head roles)
  - **Tab 3: Privacy** - Toggle visibility for each section
  - **Tab 4: Activity** - Event participation, bookings history

### **Page 3: Clubs Directory**

- **Search & Filter Bar**: Search by name, filter by category/tags
- **Club Cards Grid**: Logo, name, member count, "Join/Request" button
- **Club Detail Modal**: Full description, members list, upcoming events, contact heads

### **Page 4: Events Management**

- **View Toggle**: Calendar view / List view
- **Filter Bar**: Status (draft/pending/approved), date range, club filter
- **Event Cards**: Color-coded by status, quick actions (edit/view/delete)
- **Create Event Button** (floating) → opens multi-step form

### **Page 5: Event Creation Form**

- **Step 1: Basic Info** - Title, description, type, dates
- **Step 2: Collaboration** - Add organizing clubs, assign roles
- **Step 3: Resources** - Request rooms/equipment (integrates booking)
- **Step 4: Budget** - Estimated budget, justification
- **Step 5: Review & Submit** → goes to approval flow

### **Page 6: Resource Booking**

- **Left Panel**: Resource categories tree (Rooms → Halls → Labs, Equipment → AV → Tech)
- **Center**: Weekly calendar view with existing bookings
- **Right Panel**: Resource details, quick booking form
- **Conflict Detection**: Visual warning on overlapping bookings

### **Page 7: Analytics Dashboard (Admin)**

- **Metrics Cards**: Total users, active clubs, events this month, resource utilization %
- **Charts**:
  - Events by status (pie chart)
  - Resource usage over time (line chart)
  - Club activity heatmap
- **Export Options**: Download reports as CSV/PDF

---

## **6. Technology Stack**

### **Frontend**

- **Framework**: React.js with Vite
- **UI Library**: Material-UI or Chakra UI
- **State Management**: Context API + useReducer (or Zustand)
- **Charts**: Recharts or Chart.js
- **Calendar**: FullCalendar.io
- **Forms**: Formik + Yup validation
- **Routing**: React Router v6

### **Backend**

- **Runtime**: Node.js with Express.js
- **Database**: MongoDB (with Mongoose) OR PostgreSQL (with Prisma)
- **Authentication**: JWT + bcrypt, role-based middleware
- **File Upload**: Multer + Cloudinary/S3
- **Email**: Nodemailer for notifications
- **Real-time**: Socket.io for notifications (optional)
- **Validation**: Joi or Zod

### **DevOps & Tools**

- **Version Control**: Git + GitHub
- **API Testing**: Postman/Insomnia
- **Deployment**: Docker, backend on Railway/Render, frontend on Vercel/Netlify
- **Monitoring**: Winston for logging

---

## **7. Key Features Implementation Plan**

### **Phase 1: Foundation (Weeks 1-3)**

- User authentication & role system
- Basic profile management
- Club CRUD operations

### **Phase 2: Core Features (Weeks 4-6)**

- Event lifecycle (creation → approval → completion)
- Resource booking with conflict detection
- Basic notifications

### **Phase 3: Advanced Features (Weeks 7-8)**

- Collaborative events (multiple clubs)
- Budget tracking & approval
- Analytics dashboard

### **Phase 4: Polish & Deployment (Weeks 9-10)**

- Responsive design
- Export functionality
- Performance optimization
- Deployment & testing

---

## **8. API Endpoints Summary**

- `POST /api/auth/login`
- `GET/PUT /api/users/profile`
- `GET/POST /api/clubs`
- `GET/PUT /api/clubs/:id/members`
- `GET/POST /api/events`
- `PUT /api/events/:id/status` (approve/reject)
- `GET/POST /api/resources`
- `POST /api/bookings` (with conflict check)
- `GET /api/analytics/overview`

---

## **9. Security Considerations**

- Role-based access control (RBAC) on all routes
- Input sanitization & validation
- JWT token expiration & refresh mechanism
- Rate limiting on authentication endpoints
- Audit logs for admin actions

---

## **10. Future Scalability Ideas**

- Mobile app (React Native)
- Calendar sync (Google Calendar/iCal)
- Payment integration for event fees
- AI-based resource recommendation
- Chat feature for club members

---

```txt
/
├── /auth
│   ├── /login
│   ├── /register
│   ├── /forgot-password
│   └── /reset-password/:token
├── /dashboard
├── /profile
│   ├── /edit
│   └── /:userId
├── /clubs
│   ├── /:clubId
│   ├── /:clubId/members
│   ├── /:clubId/events
│   ├── /:clubId/settings
│   └── /create
├── /events
│   ├── /create
│   ├── /:eventId
│   ├── /:eventId/edit
│   ├── /calendar
│   ├── /pending (admin/faculty)
│   └── /my-events
├── /resources
│   ├── /book
│   ├── /:resourceId
│   ├── /calendar
│   ├── /my-bookings
│   └── /manage (resource manager)
├── /analytics
│   ├── /overview
│   ├── /clubs
│   ├── /events
│   ├── /resources
│   └── /financial
├── /admin
│   ├── /users
│   ├── /settings
│   ├── /logs
│   └── /backup
└── /help
    ├── /faq
    ├── /guides
    └── /contact
```
---

This plan provides a comprehensive roadmap for building the Campus Connect system. Would you like me to elaborate on any specific section, such as the detailed database schema, specific wireframe mockups, or API endpoint specifications?
