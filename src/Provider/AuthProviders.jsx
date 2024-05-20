import { createContext, useEffect, useState} from "react";
// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth =getAuth(app);





const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null);

// create register with firebase
    const createUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login users account varify
    const sigin=(email,password)=>{

        return signInWithEmailAndPassword(auth, email,password)
    }

    
// ovsebing user sing_in or sing_out onAuthStateChanged 
    useEffect(()=>{
    
   const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
        console.log('user alreadey exist or not ',currentUser);
        setUser(currentUser);
     });
     return()=>{
        unsubscribe();
     }
    },[])

    const Logout=()=>{
       return signOut(auth);
    }


    const authInfo={
        user,
        createUser,
        Logout,
        sigin
    }

    return (
        
        


       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;
