import { createBrowserRouter } from "react-router-dom";

import Index from "@/pages/Start/Start";
import App from "pages/App/App";
import Login from "pages/Login/Login";

export default createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/app",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    }

])