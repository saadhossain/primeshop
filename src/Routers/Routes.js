import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Componets/Home/Home'
import Login from "../Componets/Login/Login";
import Register from "../Componets/Register/Register";

export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/home', element:<Home></Home>},
            {path:'/login',element:<Login></Login>},
            {path:'/register', element:<Register></Register>}
        ]
    }
])