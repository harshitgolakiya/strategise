import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import AdminLayout from '../admin/components/Layouts/DefaultLayout'; // Import AdminLayout
import { routes } from './routes';
import adminRoutes from '../admin/adminRoutes';

// Map over the admin routes to apply AdminLayout
const finalAdminRoutes = adminRoutes.map((route) => {
    return {
        ...route,
        element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <AdminLayout>{route.element}</AdminLayout>,
    };
});

// Map over the main routes to apply appropriate layouts
const finalRoutes = routes.map((route) => {
    return {
        ...route,
        element: route.layout === 'blank' ? <BlankLayout>{route.element}</BlankLayout> : <DefaultLayout>{route.element}</DefaultLayout>,
    };
});

// Combine both main and admin routes
finalRoutes.push(...finalAdminRoutes);

// Create the router using the final combined routes
const router = createBrowserRouter(finalRoutes);

export default router;
