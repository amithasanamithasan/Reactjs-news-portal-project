import { useContext} from "react";
import { AuthContext } from "../Provider/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const Privetroute = ({children}) => {

const {user,lodaing}=useContext(AuthContext);
const location =useLocation();
console.log(location.pathname);

if(lodaing){
    return<span className="loading loading-spinner text-primary"></span>
}

// jodi user  log is kora thake tahole children route e jaba na hole retrn login page 
if(user){
   
    return children;
}

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privetroute;