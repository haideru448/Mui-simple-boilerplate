import * as React from "react";
import { useRoutes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'


export default function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
      // children: [
      //   {
      //     path: "messages",
      //     element: <DashboardMessages />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
    },
    {
      path: "/pricing",
      element: <PricingPage />,
      // children: [
      //   {
      //     path: "messages",
      //     element: <DashboardMessages />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
    },
    // { path: "team", element: <AboutPage /> },
  ]);

  return element;
}