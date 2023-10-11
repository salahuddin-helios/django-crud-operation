import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import UserInfo from "../Pages/UserInfo/UserInfo";
import UserInfoDetail from "../Pages/UserInfo/UserInfoDetail";
import UserUpdate from "../Pages/UserUpdate/UserUpdate";

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
        ]
    }
])
export default router