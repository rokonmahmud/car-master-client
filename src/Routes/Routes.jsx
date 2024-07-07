import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login & Singup/Login";
import Signup from "../Pages/Login & Singup/Signup";
import CheckoutForm from "../Pages/Checkout/CheckoutForm";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import BookingsServics from "../Pages/Services/BookingServices/BookingsServics";
import PrivetRoute from "../Pages/Login & Singup/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        {
            path:"/",
            element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/services/:id",
          element: <ServiceDetails/>,
          loader:({params})=> fetch(`https://car-master-server-three.vercel.app/services/${params.id}`)
        },
        {
          path: "/checkout/:id",
          element: <PrivetRoute><CheckoutForm/></PrivetRoute>,
          loader:({params})=> fetch(`https://car-master-server-three.vercel.app/checkout/${params.id}`)
        },
        {
          path: "/mybooking",
          element: <PrivetRoute><BookingsServics/></PrivetRoute>,
          

        }
    ],
  },
]);

export default router;
