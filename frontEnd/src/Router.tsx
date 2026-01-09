import { createBrowserRouter } from "react-router-dom";

// Component imports
import App from "./App";
import LogIn from "./components/html/Header/LogIn";
import SignUp from "./components/html/Header/SignUp";
import Profile from "./components/html/Header/Profile";
import Error from "./components/html/Extra/Error";
import Loader from "./components/html/Extra/Loader";

export const router = createBrowserRouter([
    {
        path: "/", element: <App />, errorElement: <Error />,
    },
    {
        path: "/login", element: <LogIn />
    },
    {
        path: "/signup", element: <SignUp />
    },
    {
        path: '/profile', element: <Profile />
    },
    {
        path : '/loading' , element : <Loader />
    }
]);
