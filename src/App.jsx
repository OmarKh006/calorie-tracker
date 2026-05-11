import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
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
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "track",
        element: <TrackPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
