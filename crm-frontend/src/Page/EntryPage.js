import React, { useState } from 'react'
import { LoginComponent } from '../components/LoginComponent'

export const EntryPage = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

    const handleOnchange= (e) => {
        const {name,value}=e.target
        switch(name){
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default: break
        }
    }

    const handleOnSubmit= (e) =>{
        e.preventDefault()
        if(!email || !password){
            alert("Fill up all the form!!")
        }
        console.log(email,password)
    }

  return (
    <div className='bg-blue-300 h-screen flex justify-center items-center'>
        <LoginComponent 
        handleOnchange={handleOnchange}
        handleOnSubmit={handleOnSubmit}
        email={email}
        password={password}/>
    </div>
  )
}
