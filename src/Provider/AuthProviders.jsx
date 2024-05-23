import { createContext, useEffect, useState} from "react";

import { createUserWithEmailAndPassword,  onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";


import auth from "../firebase/firebase.config";




export const AuthContext = createContext(null);

const googleprovider = new GoogleAuthProvider()



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

 const googleLogin= ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleprovider)
 }

//  const passwordReset=(auth,email)=>{
//     setLoading(true)
//  return sendPasswordResetEmail(auth,email)
//  }


    
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
        sigin,
        googleLogin,
     
     
    }

    return (
        
        


       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;
