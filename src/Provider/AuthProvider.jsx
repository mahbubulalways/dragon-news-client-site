import React, { createContext } from 'react';
import { getAuth,GoogleAuthProvider  } from "firebase/auth";
import app from '../firebase/firebase.config';
export  const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const user={
        displayName:"khn"
    }
    const authInfo={
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;