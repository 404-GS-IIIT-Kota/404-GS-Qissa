import { useNavigate } from "react-router-dom";
import NotFound from "../assets/Denied.jpeg";

function Denied(){
    const navigate = useNavigate();
    return (
        <main className="flex flex-col justify-center items-center">
                <img 
                src={NotFound} 
                alt="Placeholder" 
                className=" justify-center items-center"
               
                />
            <div>
                <button onClick={() => navigate(-1)} className="mt-5">
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-white">
                        Go back
                    </span>
                </button>
            </div>
        </main>
    );
}

export default Denied;