import Mainlayout from "@/component/Mainlayout";
import UserLayout from "@/component/UserLayout";
import Orders from "@/pages/admin/Orders";
import Products from "@/pages/admin/Products";
import Users from "@/pages/admin/Users";
import Login from "@/pages/Auth/Login/Login";
import Register from "@/pages/Auth/Register/Register";


import About from "@/pages/default/About";
import Allproducts from "@/pages/default/Allproducts/Allproducts";

import ChecKout from "@/pages/default/Checkout/ChecKout";
import OrderVerify from "@/pages/default/Checkout/OrderVerify";
import Home from "@/pages/default/Home";
import Productsdetails from "@/pages/default/Productsdetails";
import UserProfile from "@/pages/users/UserProfile";
import ViewOrder from "@/pages/users/ViewOrder/ViewOrder";
import ProtectedRoute from "@/Utils/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";






const router = createBrowserRouter([
    {
        path:"/",
        element: <Mainlayout></Mainlayout>,
        children:[
            {
                index:true,
                element: <Home></Home>
                
            } ,
            {
                path:"all-products",
                element:<Allproducts></Allproducts>

            },
            {
                path:"productsdetails",
                element:<Productsdetails></Productsdetails>
            },
            {
                path:"about",
                element: <About></About>
            },
            {
                path:"checkout",
                element:<ProtectedRoute> <ChecKout></ChecKout></ProtectedRoute>
            },
            {
                path:"/orders/verify",
                element:<ProtectedRoute><OrderVerify></OrderVerify></ProtectedRoute>
            }
            
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/dashboard",
        element:<UserLayout></UserLayout>,
        children:[
            {
                index:true,
                element:<UserProfile></UserProfile>

            },
            {
                path:"/dashboard/user/vieworder",
                element:<ViewOrder></ViewOrder>
            },
            {
                path:"/dashboard/admin/users",
                element:<Users></Users>
            },
            {
                path:"/dashboard/admin/products",
                element:<Products></Products>
            },
            {
                path:"/dashboard/admin/orders",
                element:<Orders></Orders>
            }
            
        ]
    }
    
])


export default router