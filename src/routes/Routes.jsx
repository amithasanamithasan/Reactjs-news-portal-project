import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Home/Register/Register";
import NewsPage from "../pages/News/NewsPage";
import Privetroute from "./Privetroute";
import About from "../pages/Home/About";
import UserProfile from "../pages/Home/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
          loader:()=>fetch('/news.json')
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/profile',
          element:<UserProfile></UserProfile>
        },
        {
          path:'/news/:id',
          element:<Privetroute><NewsPage></NewsPage></Privetroute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;