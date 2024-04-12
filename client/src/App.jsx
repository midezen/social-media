import styled, { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./themeData";
import { useContext, useEffect, useState } from "react";
import { DarkmodeContext } from "./contexts/darkmode.jsx";

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
  const { darkmode } = useContext(DarkmodeContext);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
