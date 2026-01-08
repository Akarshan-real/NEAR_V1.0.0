import { Link } from "react-router-dom";
import { dottedBg } from "../../../Styles";

const Error = () => {
    return (
        <div className="w-full h-screen flex-mid flex-col gap-4" style={dottedBg}>
            <div className="text-4xl md:text-7xl text-center w-full max-w-2xl py-2 rounded-3xl border-4 border-white text-white bg-(--void) font-bold">
                404 Not Found
            </div>
            <Link className="text-white text-2xl md:text-4xl px-6 py-2 rounded-2xl font-bold bg-green-600 hover:bg-(--green) transition-colors duration-250 ease-in-out border-black" to='/'>Home</Link>
        </div>
    )
}

export default Error