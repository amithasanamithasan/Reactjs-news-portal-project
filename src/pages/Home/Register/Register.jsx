import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";

const Register = () => {

    const{createUser}=useContext(AuthContext);

     console.log(createUser)

    const registerforvalue=e=>{
 e.preventDefault();
 const name= e.target.name.value;
 const photo =e.target.photo.value;
 const email= e.target.email.value;
 const password=e.target.password.value;
 console.log(name,photo,email,password);

 createUser(email,password)
 .then(result=>{
    console.log(result.user);

})
.catch(error=>{
    console.log(error);
})


    }
    return (
        <div>
      <Navbar></Navbar>
        <div >
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6"></p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={registerforvalue} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your photo</span>
              </label>
              <input type="photo" name="photo" placeholder="submit your photo" className="input input-bordered" required />
            </div>
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
              
            </div>
            <div className="form-control mt-6">
                <button  className="btn btn-accent">Register</button>
              </div>

        <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" 
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3
       focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600
       dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
       required />
    </div>
    <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
        terms and conditions</a></label>
  </div>

 </form>

      <p className="p-4" >Please Form Fillup &! 
      <Link to="/login" className="underline text-green-800">  
      LOG_IN</Link></p> 
       
        </div>
      </div>
    </div>
    </div>
    </div>
    );
};

export default Register;