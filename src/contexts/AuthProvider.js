import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dbUser, setDbUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, new GoogleAuthProvider());
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateUserProfile = (userInf) => {
        return updateProfile(user, userInf);
    }


    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user')
        setDbUser(JSON.parse(loggedInUser))
        setInterval(() => {
            const loggedInUser = localStorage.getItem('user')
            setDbUser(JSON.parse(loggedInUser))
        }, 10000)

    }, [])


    const authInfo = {
        createUser,
        signIn,
        signInWithGoogle,
        LogOut,
        updateUserProfile,
        user,
        loading,
        setDbUser,
        dbUser
    }
    // console.log(dbUser)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;