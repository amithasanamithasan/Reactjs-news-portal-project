import { createContext, useEffect, useState} from "react";
// import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext(null);

const auth =getAuth(app);





const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null);
    const[lodaing ,setLoading] =useState(true);

// create register with firebase
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login users account varify
    const sigin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    
// ovsebing user sing_in or sing_out onAuthStateChanged 
    useEffect(()=>{
        setLoading(true)
   const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
        console.log('user alreadey exist or not ',currentUser);
        setUser(currentUser);
        setLoading(false)
     });
     return()=>{
        unsubscribe();
     }
    },[])

    const Logout=()=>{
        setLoading(true)
       return signOut(auth);
    }


    const authInfo={
        user,
        lodaing,
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
