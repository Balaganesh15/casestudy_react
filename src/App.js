import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Treatment from "./Treatment";
import Footer from "./Footer";
import Doctor from "./Doctor";
import Testimonial from "./Testimonial";
import Login from "./Login";
import Sign from "./Sign";

const routerconfig = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/header", element: <Header /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/treatment", element: <Treatment /> },
  { path: "/doctor", element: <Doctor /> },
  { path: "/testimonial", element: <Testimonial /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/sign", element: <Sign /> },
  { path: "/footer", element: <Footer /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={routerconfig}></RouterProvider>
    </>
  );
}

export default App;
