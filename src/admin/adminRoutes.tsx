import { lazy } from "react";


// const Dashboard = lazy(() => import("../pages/Dashboard"));
// const Analytics = lazy(() => import("../pages/Analytics"));
// const Users = lazy(() => import("../pages/Users"));
// const Settings = lazy(() => import("../pages/Settings"));
// const Profile = lazy(() => import("../pages/Profile"));  
const AdminLogin = lazy(() => import("./pages/Authentication/LoginCover"));
const AdminRegister = lazy(() => import("./pages/Authentication/RegisterCover"));
const AdminUnlock = lazy(() => import("./pages/Authentication/UnlockCover"));
// const AdminManageUser = lazy(() => import("./pages/Authentication/ManageUser"));
const Index = lazy(() => import("./pages/Admin/Index"));
const ManageUser = lazy(() => import("./pages/Admin/ManageUser"));
const Transaction = lazy(() => import("./pages/Admin/Transaction"));
const AdminProfile = lazy(() => import("./pages/Users/Profile"));
const AdminProfileSettings = lazy(() => import("./pages/Users/AccountSetting"));





export const adminRoutes = [

    {
        path: 'admin',
        element : <Index/>
    },
    {
        path: 'admin/manage-user',
        element : <ManageUser/>
    },
    {
        path:'admin/transaction',
        element: <Transaction/>
    },
    {
        path: 'admin/login',
        element: <AdminLogin />,
        layout: 'blank',
    },
    {
        path: 'admin/register',
        element: <AdminRegister />,
        layout: 'blank',
    },
    {
        path: 'admin/profile',
        element: <AdminProfile/>
    },
    {
        path: 'admin/profile-settings',
        element: <AdminProfileSettings/>
    },
    {
        path: 'admin/lockscreen',
        element: <AdminUnlock />,
        layout: 'blank',
    },

]

export default adminRoutes;