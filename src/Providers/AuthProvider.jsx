import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider);
    };
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // sign in user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("current user", currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setLoading(false);
            
            // JWT related code
            if (currentUser) {
                axios
                    .post(`${import.meta.env.VITE_serverURL}/jwt`, loggedUser, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log("token response", res.data);
                    });
            } else {
                axios
                    .post(`${import.meta.env.VITE_serverURL}/logout`, loggedUser, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
            }
        });
        return () => {
            return unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
};
