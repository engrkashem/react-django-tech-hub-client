import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import DetailDevelopers from "../components/About/DetailDevelopers";
import DetailsProject from "../components/About/DetailsProject";
import Courses from "../components/Courses/Courses";
import Dashboard from "../components/Dashboard/Dashboard/Dashboard";
import Discover from "../components/Discover/Discover";
import Home from "../components/Home/Home";
import Jobs from "../components/Jobs/Jobs";
import Login from "../components/Login/Login";
import People from "../components/People/People";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";
import ProfileUpdate from "../components/Dashboard/ProfileUpdate/ProfileUpdate";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../Layout/DashboardLayout";
import WriteBlog from "../components/Dashboard/Dashboard/Blogs/WriteBlog";
import CourseLayout from "../Layout/CourseLayout";
import JobLayout from "../Layout/JobLayout";
import BlogDetails from "../components/Dashboard/Dashboard/Blogs/BlogDetails";
import UpdateBlog from "../components/Dashboard/Dashboard/Blogs/UpdateBlog";
import CourseDetail from "../components/Courses/CourseDetail";
import CreateCourse from "../components/Courses/CreateCourse";
import Payment from "../components/Courses/Payment/Payment";


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
                path: 'project-details',
                element: <DetailsProject></DetailsProject>
            },
            {
                path: 'developers-details',
                element: <DetailDevelopers></DetailDevelopers>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/update-profile',
                element: <ProfileUpdate></ProfileUpdate>
            },
            {
                path: '/dashboard/write-blog',
                element: <WriteBlog></WriteBlog>
            },
            {
                path: '/dashboard/blog-detail/:blogId',
                loader: async ({ params }) => {
                    return fetch(`http://127.0.0.1:8000/blog/${params.blogId}`)
                },
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/dashboard/update-blog/:blogId',
                loader: async ({ params }) => fetch(`http://127.0.0.1:8000/blog/${params.blogId}`),
                element: <UpdateBlog></UpdateBlog>
            }
        ]
    },
    {
        path: '/course',
        element: <PrivateRoutes><CourseLayout></CourseLayout></PrivateRoutes>,
        children: [
            {
                path: '/course',
                element: <Courses></Courses>
            },
            {
                path: '/course/create-course',
                element: <CreateCourse></CreateCourse>
            },
            {
                path: '/course/:courseId',
                loader: async ({ params }) => {
                    return fetch(`http://127.0.0.1:8000/course/${params.courseId}/`)
                },
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/course/payment/:courseId',
                loader: async ({ params }) => {
                    return fetch(`http://127.0.0.1:8000/course/${params.courseId}/`)
                },
                element: <Payment></Payment>
            },
        ]
    },
    {
        path: '/job',
        element: <PrivateRoutes><JobLayout></JobLayout></PrivateRoutes>,
        children: [
            {
                path: '/job',
                element: <Jobs></Jobs>
            }
        ]
    }
]);

export default router;