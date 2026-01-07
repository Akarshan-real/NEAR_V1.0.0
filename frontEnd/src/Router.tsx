import { createBrowserRouter } from "react-router-dom";

// Component imports
import App from "./App";
import LogIn from "./components/html/LogIn";
import SignUp from "./components/html/SignUp";
import Error from "./components/html/Error";
import Profile from "./components/html/Profile";

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
    }
]);
