import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext,  useRef,  useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";

import { sendPasswordResetEmail } from "firebase/auth";

import toast from "react-hot-toast";
import auth from "../../firebase/firebase.config";








const Login = () => {
const[success, setSuccess]=useState('');
const[errormessage,setErrormessage]= useState('');

const emailRef=useRef(null)

    const{sigin}=useContext(AuthContext);
   

    const location=useLocation();

   const navigate =useNavigate();

const loginforvalue=e=>{
    e.preventDefault();
const email=e.target.email.value;
const password=e.target.password.value;
console.log(email,password);
setSuccess('');
toast.success(' User LOG_IN SuccessFully')
 setErrormessage('');

if (password.length < 6) {
  toast.error('Password should be at least 6 characters');
  setErrormessage('Password should be at least 6 characters')
  return;
}
else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
  {
 console.log('please right a valid email');
 return;
}


sigin(email,password)
 .then(result=>{
    console.log(result.user);
    // navigate after log in 
  navigate(location?.state? location.state:'/');
   
})
.catch(error=>{
  console.log(error);
  setErrormessage(error.message);

})
}



const handelforgettpass= () =>{
  const email=emailRef.current.value
  if(!email){
    console.log('please provied an  email' ,emailRef.current.value)
    return;
  }
  else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
    {
   console.log('please right a valid email');
   return;
  }

 
 sendPasswordResetEmail(auth,email)
 .then(()=>{
   alert('please check your email')
  })
  .catch(error=>console.log(error))

  }
 









    return (
        <div>
          <Navbar>  </Navbar>
          <div >
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginforvalue} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                name="email" 
                  ref={emailRef}
                placeholder="email" 
                className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a   className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button   className="btn btn-primary">Login</button>
              </div>
            </form>
            {
              success&& <p className="text-2xl text-green-600"> User LOG_IN succesFully</p>
            }
            {
    errormessage && <p className= "right-3 py-3 font-serif text-center text-red-600">{errormessage} </p>
}

        <p className="p-4" >Do You Have An Account! Please 
        <Link to="/register" className="underline text-green-800">  
         Resister</Link></p> 

          </div>
        </div>
      </div>
      </div>
      </div>
    );
};

export default Login;
