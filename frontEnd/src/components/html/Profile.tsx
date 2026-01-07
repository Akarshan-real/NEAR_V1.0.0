import { useState } from "react";
import { dottedBg } from "../../Styles";

const Profile = (props: any) => {
    const [logOutPopUp, setLogOutPopUp] = useState(false);

    return (
        <div className="w-full h-screen flex-mid" style={dottedBg}>
            <div className="w-4/5 md:w-2/5 h-4/5 bg-(--void) flex items-center justify-around flex-col rounded-2xl border-2 border-white">
                <div className="text-center text-white font-bold">{props.username}</div>
                <div className="flex justify-evenly items-center gap-3 h-2/5 w-full">
                    <div className="w-2/5 h-full bg-violet-400"></div>
                    <div className="w-2/5 h-full bg-violet-400"></div>
                </div>
                <button
                    className={`text-xl md:text-2xl bg-red-600 hover:bg-red-800 text-white font-bold px-6 py-2 rounded-3xl cursor-pointer transition-colors duration-200 ease-in-out`}
                    type="button" onClick={() => setLogOutPopUp(true)}>
                    Log Out
                </button>
            </div>

        </div>
    )
}

export default Profile
