import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext()
const UserContext = ({children}) => {
    const auth = getAuth(app);
    //Store user data in a State
    const [user, setUser] = useState({});
    //User registration
    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //User login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Update Profile or Display Name
    const updateDisplayName = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }
    //Email Verification
    const emailVerify = () =>{
        return sendEmailVerification(auth.currentUser)
    }



    //User Signout
    const logOut = () => {
        return signOut(auth);
    }
    //user data using onAuthStateChanged
    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return () => unSubscribe();
    }, [auth])
    //Send All Data acroos the site
    const userInfo = {user, userRegister, updateDisplayName, emailVerify, userLogin, logOut};
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;