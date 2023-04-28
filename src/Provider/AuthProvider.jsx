import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export  const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const createUserPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn=(email,password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log(currentUser);
    })
    return ()=>{
        return unsubscribe()
    }
    },[])
    const logOut=()=>{
       return signOut(auth)
    }
    const authInfo={
        user,
        createUserPassword,
        SignIn,
        logOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;