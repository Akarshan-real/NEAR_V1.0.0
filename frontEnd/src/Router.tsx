import { createBrowserRouter } from "react-router-dom";

// Component imports
import App from "./App";
import LogIn from "./components/html/LogIn";
import SignUp from "./components/html/SignUp";
import Profile from "./components/html/Profile";
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
        path: '/profile', element: <Profile userName={"CoolGuy"} password={"12345"} />
    },
    {
        path : '/loading' , element : <Loader />
    }
]);
