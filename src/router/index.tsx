import { createBrowserRouter } from "react-router-dom";

import Start from "@/pages/Start/Start";
import App from "pages/App/App";
import Login from "pages/Login/Login";
import Index from "@/pages/Index/Index";
import Search from "@/pages/Search";

export default createBrowserRouter([
    {
        path: "/",
        element: <Start />
    },
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/index',
        element: <Index />
    },
    {
        path: '/search',
        element: <Search />
    }
])