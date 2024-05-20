import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Rightsidenav = () => {
    return (
        <div className=" space-y-2 " >
  
        <p className="font-poppins font-semibold p-1 text-2xl text-blue-600">Login_With</p>
            
      <button>
          <div className="border p-1  m-1 border-cyan-400 rounded-md  py-2 ">
          <p className="text-2x flex  text-cyan-500"> <FaGoogle className="mr-1"></FaGoogle> Loin with Google </p>
          </div>
                     
        </button>
            <button>
          <div className="border  m-1 border-cyan-400 p-2 rounded-md py-2">
          <p className="text-2x flex  "> <FaGithub className="mr-1"></FaGithub> Loin with GitHub </p>
          </div>
           </button>
        </div>
    );
};

export default Rightsidenav;