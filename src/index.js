import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./routes/Home";
import Announcements from "./routes/Announcements";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import HealthServices from "./routes/HealthServices";
import OurStory from "./routes/OurStory";
import Donate from "./routes/Donate";
import Partners from "./routes/Partners";
import Volunteer from "./routes/Volunteer";
import NewPatientForms from "./routes/NewPatientForms";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Appointments from "./routes/Appointments";
import Request from "./routes/Request";
import Medical from "./routes/Medical";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { zhCN } from "@mui/material/locale";
import CommunityOutreach from "./routes/CommunityOutreach";
import Education from "./routes/EducationCenter";
import Headlines from "./routes/Headlines";
import Garden from "./routes/Garden";
import Reports from "./routes/Reports";
import EducationCenter from "./routes/EducationCenter";
import LoginHandler from "./components/LoginHandler";
import "./App.css";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  zhCN
);

const AppLayout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "appointments",
        element: (
          <>
            <LoginHandler />
            <Appointments />
          </>
        ),
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "healthservices",
        element: <HealthServices />,
      },
      {
        path: "ourstory",
        element: <OurStory />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "NewPatientForms",
        element: <NewPatientForms />,
      },
      {
        path: "communityoutreach",
        element: <CommunityOutreach />,
      },
      {
        path: "educationcenter",
        element: <EducationCenter />,
      },
      {
        path: "Request",
        element: <Request />,
      },
      {
        path: "Medical",
        element: <Medical />,
      },
      {
        path: "headlines",
        element: <Headlines />,
      },
      {
        path: "garden",
        element: <Garden />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
