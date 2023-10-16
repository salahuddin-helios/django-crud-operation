import { Link, createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Login";
import UserInfo from "../Pages/UserInfo/UserInfo";
import UserInfoDetail from "../Pages/UserInfo/UserInfoDetail";
import UserUpdate from "../Pages/UserUpdate/UserUpdate";
import Product from "../Pages/Product/Product";
import DetailProduct from "../Pages/Product/DetailProduct";
import Cart from "../Components/Reduce/Cart";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Product></Product>
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
            },
            {
                path:"login/",
                element:<Login></Login>
            },
            {
                path:"register/",
                element:<Register></Register>
            },
        ]
    },
    {
        path:'*',
        element: <div className="text-center my-4 text-light">
            <h2>Error!</h2>
            <p>Something went wrong</p>
            <Link to={'/'} className="btn btn-primary btn-sm">Back to safe</Link>
        </div>
    }
])
export default router