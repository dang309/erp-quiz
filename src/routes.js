import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

//components
import { HomePage, WelcomePage, ResultPage, ReviewPage } from "./pages";

//layouts
import { MainLayout } from "./layouts";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <WelcomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/result",
          element: <ResultPage />,
        },
        {
          path: "/review",
          element: <ReviewPage />,
        },
      ],
    },

    { path: "*", element: <Navigate to="/404" /> },
  ]);
}
