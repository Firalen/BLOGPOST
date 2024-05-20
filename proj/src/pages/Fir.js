import React from 'react'
import { useState } from 'react'
import {auth,provider}  from "../firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
const Fir = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log(auth?.currentUser?.email)
    const Signin = async()=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        }
        catch(err){
            console.error(err)
        }
        
    };
    const Signinwith = async()=>{
        try{
            await signInWithPopup(auth,provider)
        }
        catch(err){
            console.error(err)
        }
        
    };
    const Signout = async()=>{
        try{
            await signOut(auth,provider)
        }
        catch(err){
            console.error(err)
        }
        
    };
  return (
    <div>
      <input placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder='password' type='password' onChange={(e)=>setPassword(e.target.value)}  />
      <button onClick={Signin}>sign in</button>
      <button onClick={Signinwith}>sign in with google</button>
      <button onClick={Signout}>logout</button>
    </div>
  )
}

export default Fir
