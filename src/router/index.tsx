import { createBrowserRouter } from "react-router-dom";

import Index from "@/pages/Start/Start";
import App from "pages/App/App";

export default createBrowserRouter([
    {
        path: "/index",
        element: <Index />
    },
    {
        path: "/app",
        element: <App />
    }

])