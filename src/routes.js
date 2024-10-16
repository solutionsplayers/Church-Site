import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import AdminDashboard from "./layouts/Dashboard/AdminDashboard";
import ContactUs from "./views/pages/ContactUs";

import Minister from "./views/pages/Minister";
import MinistryHuman from "./views/pages/MinistryHuman";
import MinistryHousing from "./views/pages/MInistryHousing";
import PrayerRequest from "./views/pages/PrayerRequest";
import StudyMaterials from "./views/pages/StudyMaterials";
import StudyIntro from "./views/pages/StudyIntro";
import PrayerRegards from "./views/pages/PrayerRegards";
import LiveStream from "./views/pages/LiveStream";
import Sermons from "./views/pages/Sermons";
import ShowEventVideo from "./views/pages/ShowVideo";
import Donate from "./views/pages/Donate";
import AllUpcomings from "./views/pages/AllEvents";
import EventDetail from "./views/pages/EventDetail";
import SermonDetail from "./views/pages/SermonDetail";
import Blog from "./views/pages/Blog";
import AllBlogData from "./views/pages/AllBlogData";
import AboutUs from "./views/pages/AboutUs";
import AllEvents from "./views/pages/AllEvents";
import LastEventDetail from "./views/pages/LastEventDetail";
import { useTheme } from "@mui/material";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import BlogData from "./views/pages/Blog/molecules/BlogData";




export default function Router() {
  const theme = useTheme()
  const [progress, setProgress] = useState(0)

  return (
    <>
      <LoadingBar

        color={theme.palette.primary.main}

        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {useRoutes([
        {
          path: "/",
          element: <Landing setProgress={setProgress} />,
        },
        {
          path: "admin",
          element: <AdminDashboard />,
          children: [],
        },
        {
          path: "auth",
          element: <AuthLayout />,
          children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <SignUp /> },
          ],
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/admin-login",
          element: <AdminLogin />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
        {
          path: "/contact",
          element: <ContactUs setProgress={setProgress} />,
        },
        {
          path: "/blog",
          element: <Blog setProgress={setProgress} />,
        },
        { path: "/prayer-regards", element: <PrayerRegards setProgress={setProgress} /> },
        {
          path: "minister",
          element: <Minister setProgress={setProgress} />,
        },
        {
          path: "ministerHuman",
          element: <MinistryHuman />,
        },
        {
          path: "ministerHousing",
          element: <MinistryHousing setProgress={setProgress} />,
        },
        {
          path: "prayer-request",
          element: <PrayerRequest setProgress={setProgress} />,
        },
        {
          path: "study-materials",
          element: <StudyMaterials setProgress={setProgress} />,
        },
        // {
        //   path: "study-intro",
        //   element: <StudyIntro />,
        // },
        {
          path: 'live-stream',
          element: <LiveStream setProgress={setProgress} />
        },
        {
          path: 'sermons',
          element: <Sermons setProgress={setProgress} />
        },
        {
          path: 'eventVideo',
          element: <ShowEventVideo setProgress={setProgress} />
        },
        {
          path: 'donate',
          element: <Donate setProgress={setProgress} />
        },
        {
          path: 'upcoming-event',
          element: <AllEvents setProgress={setProgress} />
        },
        {
          path: 'eventDetail',
          element: <EventDetail setProgress={setProgress} />
        },
        {
          path: '/sermonDetail',
          element: <SermonDetail setProgress={setProgress} />
        },
        {
          path: '/allBlogDetail',
          element: <AllBlogData setProgress={setProgress} />
        },
        {
          path: '/about-us',
          element: <AboutUs setProgress={setProgress} />
        },

        {
          path: 'lastEventDetail',
          element: <LastEventDetail setProgress={setProgress} />
        },
        {
          path: 'blog_data',
          element: <BlogData setProgress={setProgress} />
        }

      ])}
    </>
  )
}