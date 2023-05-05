import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Category/Categories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import LogIn from "../Pages/Login/LogIn";
import LoginRoute from "../Layout/LoginRoute";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginRoute></LoginRoute>,
    children:[
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path:'/log-in',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/terms',
        element:<Terms></Terms>
      },
    ]
  },
    {
      path: "/category",
      element: <Main></Main>,
      children:[
        {
          path: "/category/:id",
          element: <Categories></Categories>,
          loader: ({params})=>fetch(`https://the-news-dragon-server-mahbubulalways.vercel.app/categories/${params.id}`)

        }
      ]
    },
    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:'/news/:id',
          element:<PrivateRoute><News></News></PrivateRoute>,
          loader:({params})=>fetch( `https://the-news-dragon-server-mahbubulalways.vercel.app/news/${params.id}`)
        }
      ]

    },

  ])

  export default router