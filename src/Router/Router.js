import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About/About";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

        ]
    }

]);

export default router;