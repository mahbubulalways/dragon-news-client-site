import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categories from "../Pages/Home/Category/Categories";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import LogIn from "../Pages/Login/LogIn";
import LoginRoute from "../Layout/LoginRoute";
import Register from "../Pages/Login/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element:<Categories></Categories>,
          loader :()=>fetch('http://localhost:10000/news')     },
        {
          path: "/category/:id",
          element: <Categories></Categories>,
          loader: ({params})=>fetch(`http://localhost:10000/categories/${params.id}`)

        }
      ]
    },
    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:'/news/:id',
          element:<News></News>,
          loader:({params})=>fetch( `http://localhost:10000/news/${params.id}`)
        }
      ]

    },
    {
      path:'/',
      element:<LoginRoute></LoginRoute>,
      children:[
        {
          path:'/log-in',
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      ]
    }
  ])

  export default router