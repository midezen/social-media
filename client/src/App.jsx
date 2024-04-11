import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const Container = styled.div``;

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
