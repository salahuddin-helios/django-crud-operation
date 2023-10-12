import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import UserInfo from "../Pages/UserInfo/UserInfo";
import UserInfoDetail from "../Pages/UserInfo/UserInfoDetail";
import UserUpdate from "../Pages/UserUpdate/UserUpdate";
import Product from "../Pages/Product/Product";
import DetailProduct from "../Pages/Product/DetailProduct";
import Cart from "../Components/Reduce/Cart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'list/',
                element: <UserInfo></UserInfo>
            },
            {
                path:'details/:id',
                element: <UserInfoDetail></UserInfoDetail>,
            }, 
            {
                path:'update/:id',
                element: <UserUpdate></UserUpdate>
            },
            {
                path:'product/',
                element: <Product></Product>
            },
            {
                path:'product/:id',
                element:<DetailProduct/>
            },
            {
                path:"cart/",
                element:<Cart></Cart>
            }
        ]
    }
])
export default router