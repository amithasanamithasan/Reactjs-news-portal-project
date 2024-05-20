import { Link, NavLink } from "react-router-dom";
import user from "../../../assets/pic.jpg";

const navlinks= <>
 <li><NavLink to="/">HOME</NavLink></li>
 <li> <NavLink to="/about">ABOUT </NavLink></li>
<li><NavLink to="/carear">CAREER</NavLink></li>
</>


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" 
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" 
            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2
         shadow bg-base-100 rounded-box w-52">
        {navlinks}
        </ul>
      </div>
      <a className="text-blue-900 bg-gradient-to-r from-cyan-300
       via-cyan-600 to-green-400 hover:bg-gradient-to-bl focus:ring-4
        focus:outline-none focus:ring-cyan-100
       dark:focus:ring-cyan-400-400 font-medium rounded text-sm px-10 py-2.5 
       text-center me-2 mb-2">NEWS_PORTAL</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navlinks}
      </ul>
    </div>
    <div className="navbar-end gap-1">
    <div tabIndex={0} role="button" className=" btn btn-neutral  bt btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img  src={user}
          alt="Tailwind CSS Navbar component"  />
        </div>
      </div>
<Link>
<a className="btn btn-primary">LOG_IN</a>
</Link>
   
    </div>
  </div>
  );
};

export default Navbar;