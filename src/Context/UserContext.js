import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext()
const UserContext = ({children}) => {
    const auth = getAuth(app);
    //Store user data in a State
    const [user, setUser] = useState({});
    //Set a loading state 
    const [loading, setLoading] = useState(true);
    //User registration
    const userRegister = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //User login
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Update Profile or Display Name
    const updateDisplayName = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }
    //Email Verification
    const emailVerify = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    //User Signout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    //user data using onAuthStateChanged
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return () => unSubscribe();
    }, [auth])
    //Send All Data acroos the site
    const userInfo = {user, userRegister, updateDisplayName, emailVerify, userLogin, logOut, loading};
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;