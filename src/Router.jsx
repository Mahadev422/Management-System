import { createBrowserRouter } from "react-router-dom";
// local files
import App from "./pages/App";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Me from "./pages/profile/Me";
import UserProfile from "./pages/profile/UserProfile";
import ClubLayout from "./pages/clubs/ClubLayout";
import AllClubs from "./pages/clubs/AllClubs";
import Club from "./pages/clubs/Club";
import ClubMembers from "./pages/clubs/ClubMembers";
import ClubOverview from "./pages/clubs/ClubOverview";
import CreateClub from "./pages/clubs/CreateClub";
import ClubSettings from "./pages/clubs/ClubSettings";
import ProfileLayout from "./pages/profile/ProfileLayout";
import EventLayout from "./pages/events/EventLayout";
import AllEvents from "./pages/events/AllEvents";
import Event from "./pages/events/Event";
import EventOverview from "./pages/events/EventOverview";
import EventParticipant from "./pages/events/EventParticipant";
import RegisterEvent from "./pages/events/RegisterEvent";
import ApplyClub from "./pages/clubs/ApplyClub";
import Resources from "./pages/resources/Resources";

const Router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Me />,
          },
          {
            path: ":userId",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "/clubs",
        element: <ClubLayout />,
        children: [
          {
            index: true,
            element: <AllClubs />,
          },
          {
            path: ":clubId",
            element: <Club />,
            children: [
              {
                index: true,
                element: <ClubOverview />,
              },
              {
                path: "members",
                element: <ClubMembers />,
              },
              {
                path: "apply",
                element: <ApplyClub />,
              },
              {
                path: "settings",
                element: <ClubSettings />,
              },
            ],
          },
          {
            path: "create",
            element: <CreateClub />,
          },
        ],
      },
      {
        path: "/events",
        element: <EventLayout />,
        children: [
          {
            index: true,
            element: <AllEvents />,
          },
          {
            path: ":eventId",
            element: <Event />,
            children: [
              {
                index: true,
                element: <EventOverview />,
              },
              {
                path: "participant",
                element: <EventParticipant />,
              },
              {
                path: "register",
                element: <RegisterEvent />,
              },
            ],
          },
        ],
      },
      {
        path: 'resources',
        element: <Resources />
      }
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <h1>Forgot Password</h1>,
      },
    ],
  },
]);

export default Router;
