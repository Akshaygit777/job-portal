import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import "./App.css";

import Home from "./components/Home";

import Jobs from "./components/Jobs";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/description/:id",
  element: <JobDescription/>
  },
  
  {
    path: "/profile",
    element: <Profile/>,
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
