import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { router } from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Login } from './pages/Login'
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import { Provider, useSelector } from 'react-redux'
import { store } from './store/store'
import CartDetail from "./pages/CartDetail";
import Navbar from "./componets/Navbar";

function App() {

  const user = useSelector(state => state.user.user)

  return (
    <>
      <BrowserRouter>
        {user ?
          <>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </> :
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to={'/login'} />} />
          </Routes>
        }
      </BrowserRouter>
      <ToastContainer position="bottom-right" theme="dark" autoClose={4000} />
    </>
  );
}

export default App;
