import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import AppLayout from './components/layouts/AppLayout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import User from "./pages/User";
import About from "./pages/About";
import Contact from "./pages/Contact";
const router = createBrowserRouter([

  {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/booking/:movieId", // Dynamic route for booking with movie ID
          element: <Booking />,
        },
        {
          path:"/signin",
          element:<SignIn/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        },
        {
          path:"/user",
          element:<User/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
  
      ]
    },
    
  ]);
  
  function App() {
    
  
    return (
      <>
        
        <RouterProvider router={router} />
        
      </>
    )
  }
  
  export default App