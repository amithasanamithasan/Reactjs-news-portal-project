import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import swiming1 from "../../../assets/qZone1.png";
import swiming2 from "../../../assets/qZone2.png";
import swiming3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";
import { getAuth } from "firebase/auth";


const auth = getAuth();
const Rightsidenav = () => {
  const {googleLogin}=useContext(AuthContext);

  const handelgoogle=()=>{
    googleLogin(auth)
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
  }

    return (



        <div className=" space-y-3   p-4 mb-6" >
  
        <p className="font-poppins font-semibold p-1 text-3xl text-blue-600">Login_With</p>
            

          <div className="p-1  m-1 border-cyan-400 rounded-md  ">
          <button onClick={handelgoogle}   className="py-1 ">
          <p className="text-3x flex  text-cyan-500"> <FaGoogle className="mr-1 text-2xl"></FaGoogle> Loin with Google </p>
                        
        </button>
          </div>
       
           
          <div className="  p m-1 border-cyan-400 p-1 rounded-md ">
          <button className="py-1 ">
          <p className="text-2x flex  "> <FaGithub className="mr-1 text-2xl"></FaGithub> Loin with GitHub </p>
          </button>
          </div>

          <p className="font-poppins font-semibold p-1 text-2xl text-slate-00">Find_US_On</p>
          <div className=" p-1  m-1 border-cyan-400 rounded-md  ">
          <button className="py-1 ">
          <h2 className="text-2x flex  text-cyan-500"> <FaFacebook className="mr-1 text-2xl"></FaFacebook>Facebook </h2>
                        
        </button>
          </div>
       
           
          <div className="  p m-1 border-cyan-400 p-1 rounded-md ">
          <button className="py-1 ">
          <h2 className="text-2x flex  "> <AiFillTwitterCircle className="mr-1 text-slate-600 text-2xl"></AiFillTwitterCircle>Twitter</h2>
          </button>
          </div>

          <div className="  p m-1 border-cyan-400 p-1 rounded-md ">
          <button className="py-1 ">
          <h2 className="text-2x flex  "> <FaInstagram className="mr-1 text-orange-400 text-2xl"></FaInstagram>Instagram</h2>
          </button>
      
          </div>
          {/* q zone  */}
       
          <div className=" space-y-3  p-4 mb-6" >
  <div className="w-full text-gray-600">
        <h2 className="font-poppins font-semibold p-1 text-2xl text-pink-400">Q_Zone</h2>
            

        
       <img src={swiming1} alt="" />
       <img src={swiming2} alt="" />
       <img src={swiming3} alt="" />
       </div>
          </div>
        </div>
     
     
    )
};

export default Rightsidenav;