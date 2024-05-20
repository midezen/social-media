import styled, { ThemeProvider } from "styled-components";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/themeData";
import { useContext, useEffect, useState } from "react";
import { DarkmodeContext } from "./contexts/darkmode.jsx";
import Navbar from "./components/Navbar.jsx";
import { useSelector } from "react-redux";
import FindFriends from "./pages/findFriends.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

function App() {
  const { darkmode } = useContext(DarkmodeContext);
  const userInfo = useSelector((state) => state.user.userInfo);

  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/",
      element: userInfo ? <Layout /> : <Login />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/findFriends",
          element: <FindFriends />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
