import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";


const Login = () => {
    const{sigin}=useContext(AuthContext);
    const location=useLocation();
    console.log('location in login page',location);
   const navigate =useNavigate();

const loginforvalue=e=>{
    e.preventDefault();
const email=e.target.email.value;
const password=e.target.password.value;
console.log(email,password);

sigin(email,password)
 .then(result=>{
    console.log(result.user);
    // navigate after log in 
  navigate(location?.state? location.state:'/');

})
.catch(error=>{
    console.log(error);
})

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
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
            </form>

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
