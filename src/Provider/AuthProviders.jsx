import { createContext, useState } from "react";
// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth =getAuth(app);

// create register with firebase
const createUser= (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// observebing user sing in or singout session stage

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);




    const authInfo={
        user,
        createUser
    }

    return (
        
        


       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;
