import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DetailsPage,
  ErrorPage,
  LandingPage,
  PageLayout,
  TrackPage,
} from "./components/pages";
import EditPage from "./components/pages/EditPage";

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
        children: [
          {
            index: true,
            element: <TrackPage />,
          },
          {
            path: ":id",
            element: <DetailsPage />,
          },
          {
            path: "create",
            element: <EditPage />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
