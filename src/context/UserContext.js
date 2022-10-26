import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword,GithubAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init'

export const AuthContext=createContext()
const Auth=getAuth(app)


const UserContext = ({children}) => {


const [user,setUser]=useState({})

const [loading,setLoading]=useState(true)

const googleProvider=new GoogleAuthProvider()


const gitProvider=new GithubAuthProvider()


const createUser=(email,password)=>{


return createUserWithEmailAndPassword(Auth,email,password)


}


const signIn=(email,password)=>{


    return signInWithEmailAndPassword(Auth,email,password)
    
    
    }


    const signInWithGoogle=()=>{


        return signInWithPopup(Auth,googleProvider)
        
        }


const signInWithGit=()=>{

return signInWithPopup(Auth,gitProvider)


}





    const logOut=()=>{

        return signOut(Auth)
        
        
        }


    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(Auth,currentUser=>{
        
        setUser(currentUser)
        
        setLoading(false)
        
        
        })
        
        return()=>{
        
        
            unsubscribe()
        }
        
        
        } ,[])







//const user={displayName:'Arkan'}
    
    
    const authInfo={user,createUser,signIn,logOut,signInWithGoogle,loading,signInWithGit}
    return (

        <AuthContext.Provider value={authInfo}>


{children}


        </AuthContext.Provider>
            





     
    );
};

export default UserContext;