import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.confige";


export const AuthContext = createContext();
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

// creating user
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
 console.log(user);

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, curentUser => {
           console.log('curent user', curentUser);
           setuser(curentUser);
      
           setLoading(false)
        })
        return ()=>{
            return unsubscribe();   
        }
    },[]);

    //signout
    const logout = ()=>{
        return signOut(auth);
    }

    const AuthInfo = {
       user,
       loading,
       createUser,
       signin,
       logout

    }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;