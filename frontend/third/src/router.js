import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

export const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "*",
    element: <Error404/>
  }

])