import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Componets/Home/Home'
import Login from "../Componets/Login/Login";
import Register from "../Componets/Register/Register";
import Profile from "../Componets/Profile/Profile";
import PrivateRouter from "./PrivateRouter";
import Orders from "../Componets/Orders/Orders";
import { ProductLoader } from "../Loader/ProductsLoader";
import Shop from "../Componets/Shop/Shop";

export const routers = createBrowserRouter([
    {
        path:'/',
        loader:ProductLoader,
        element:<Main></Main>,
        children:[
            {path:'/', element:<Home></Home>},
            {path:'/home', element:<Home></Home>},
            {path:'/shop', element:<Shop></Shop>},
            {path:'/login',element:<Login></Login>},
            {path:'/register', element:<Register></Register>},
            {path:'/profile', element:<Profile></Profile>},
            {path:'/orders', element:<PrivateRouter><Orders></Orders></PrivateRouter>}
        ]
    }
])