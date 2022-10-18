import { createBrowserRouter } from "react-router-dom";

import App from '../pages/App/App'

export default createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
])