import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import DetailDevelopers from "../components/About/DetailDevelopers";
import DetailsProject from "../components/About/DetailsProject";
import Courses from "../components/Courses/Courses";
import Discover from "../components/Discover/Discover";
import Home from "../components/Home/Home";
import Jobs from "../components/Jobs/Jobs";
import Login from "../components/Login/Login";
import People from "../components/People/People";
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
            {
                path: 'discover',
                element: <Discover />
            },
            {
                path: 'people',
                element: <People />
            },
            {
                path: 'courses',
                element: <Courses />
            },
            {
                path: 'jobs',
                element: <Jobs />
            },
            {
                path: 'project-details',
                element: <DetailsProject></DetailsProject>
            },
            {
                path: 'developers-details',
                element: <DetailDevelopers></DetailDevelopers>
            },

        ]
    }

]);

export default router;