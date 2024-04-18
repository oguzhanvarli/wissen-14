import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { router } from "./router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" theme="dark" autoClose={4000} />
    </>
  );
}

export default App;
