import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, TrackPage } from "./components/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "track",
    element: <TrackPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
