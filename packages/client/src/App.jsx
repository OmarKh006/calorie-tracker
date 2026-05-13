import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DetailsPage,
  ErrorPage,
  LandingPage,
  PageLayout,
  TrackPage,
} from "./components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "track",
        element: <TrackPage />,
      },
      {
        path: "track/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
