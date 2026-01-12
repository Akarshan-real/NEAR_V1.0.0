import { createBrowserRouter } from "react-router-dom";

// Component imports
import App from "../App";
import LogIn from "../components/pages/LogIn";
import SignUp from "../components/pages/SignUp";
import Profile from "../components/pages/Profile";
import Error from "../components/pages/Error";
import NewLoader from "../components/ui/newLoader";

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
        path : '/loading' , element : <NewLoader />
    }
]);
