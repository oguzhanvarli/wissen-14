import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { router } from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Login } from './pages/Login'
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="bottom-right" theme="dark" autoClose={4000} />
    </Provider>
  );
}

export default App;
