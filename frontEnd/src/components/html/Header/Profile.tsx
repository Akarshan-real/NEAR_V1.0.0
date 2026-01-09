import { useState, useEffect } from "react";
import { dottedBg } from "../../../Styles";
import { Eye, EyeOff, Asterisk } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { type queryDetails } from "../../../Types";
import { useAuth } from "../../../contexts/Auth/useAuth";

const Profile = () => {
    const { userName , logout } = useAuth();
    const [logOutPopUp, setLogOutPopUp] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [details, setDetails] = useState<queryDetails | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setDetails({
            "Queries Asked": 4,
            "Queries Answered": 45
        })
    }, [])

    const exitApp = () => {
        logout();
        setLogOutPopUp(false);
        navigate('/');
    }

    return (
        <div className="w-full h-screen flex-mid" style={dottedBg}>
            <div className="w-4/5 md:w-2/5 h-4/5 bg-(--void) flex items-center justify-around flex-col rounded-2xl border-2 border-white">
                <div className="flex-mid flex-col gap-5">
                    <div className="text-center text-white font-bold text-5xl">{userName || `Anonymous`}</div>

                    <div className="text-gray-500 font-bold relative rounded-3xl border border-(--border-grey) h-10 min-w-1/2 hover:border-white transition-colors duration-200 ease-in-out">
                        <span className="absolute top-1/2 left-3 translate-y-[-50%] cursor-context-menu">
                            {/* {showPass ? `${props.password}` : `${"-".repeat(props.password.length)}`} */}
                            {showPass ? "password" : <Asterisk />}
                        </span>
                        <button className="absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer hover:text-white transition-colors duration-150 ease-in-out" type="button" onClick={() => setShowPass(prev => !prev)}>{showPass ? <Eye className="text-inherit" /> : <EyeOff className="text-inherit" />}</button>
                    </div>

                </div>
                <div className="flex justify-evenly items-center gap-3 h-1/2 w-full">

                    {details && Object.entries(details).map(([title, value]) => (
                        <div key={title}
                            className="text-gray-300 border border-(--border-grey) hover:border-white transition-colors duration-200 ease-in-out cursor-text rounded-xl w-2/5 h-full relative">
                            <div className="absolute top-5 left-1/2 translate-x-[-50%] text-2xl text-center whitespace-nowrap">
                                {title}
                            </div>
                            <div className="absolute inset-0 flex-mid text-center text-(--lime) text-9xl">
                                {value}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className={`text-xl md:text-2xl bg-red-600 hover:bg-red-800 text-white font-bold px-6 py-2 rounded-3xl cursor-pointer transition-colors duration-200 ease-in-out`}
                    type="button" onClick={() => setLogOutPopUp(true)}>
                    Log Out
                </button>
            </div>
            {logOutPopUp &&
                (<div className="absolute flex-mid w-screen h-screen bg-(--half-bg)">
                    <div className="text-white font-bold rounded-2xl bg-(--void) h-1/3 w-1/3 border-2 border-white flex flex-col items-end justify-center pr-5 gap-8">
                        <div className="text-4xl">Are you sure want to log out ?</div>
                        <div className="flex-mid gap-2">
                            <button type="button" onClick={exitApp}
                                className="font-light bg-red-500 hover:bg-red-700 px-5 h-10 rounded-xl cursor-pointer transition-colors duration-150 ease-in-out text-2xl">
                                Ok
                            </button>
                            <button type="button"
                                className="font-light bg-white hover:bg-gray-300 text-black px-5 h-10 rounded-xl cursor-pointer transition-colors duration-150 ease-in-out text-2xl" onClick={() => setLogOutPopUp(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Profile
